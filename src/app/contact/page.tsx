'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  business_name: z.string().min(2, { message: "Business name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Invalid phone number." }),
  product_category: z.string().min(1, { message: "Please select a category." }),
  message: z.string().optional(),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      business_name: "",
      email: "",
      phone: "",
      product_category: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // 1. Save lead to Supabase
      const { error: dbError } = await supabase
        .from('leads')
        .insert([values])

      if (dbError) console.error('Supabase error:', dbError)

      // 2. Send email via Gmail SMTP
      const emailRes = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!emailRes.ok) {
        const data = await emailRes.json()
        throw new Error(data.error || 'Email delivery failed.')
      }

      toast.success("Consultation request sent successfully!")
      setIsSuccess(true)
      form.reset()
    } catch (error: any) {
      toast.error(error.message || "Failed to send request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-36 bg-gray-50 overflow-hidden min-h-[50vh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 text-center relative z-10">
          <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl mb-8">
            Let's Start Your <span className="text-primary">Export Journey</span>
          </h1>
          <p className="text-xl leading-9 text-gray-600 max-w-2xl mx-auto font-medium">
            Ready to reach global buyers? Fill out the form below or contact us directly. Our Alibaba-certified experts are ready to build your global roadmap.
          </p>
        </div>

        {/* Static Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-12">
              Connect With Us
            </h2>
            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="h-16 w-16 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl mb-1">Call or WhatsApp</h4>
                  <p className="text-gray-600 text-lg font-medium">+91 99883 39166</p>
                  <p className="text-gray-400 font-bold text-sm mt-1 uppercase tracking-widest">Mon-Sat, 9am to 7pm IST</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="h-16 w-16 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl mb-1">Email Our Strategy Team</h4>
                  <p className="text-gray-600 text-lg font-medium">contact@grownext.in</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="h-16 w-16 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl mb-1">Visit Our Hub</h4>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed">
                    4th Floor, Vama House, Ring Rd, near Rivaa House, <br />opp. S B Center, Udhana Darwaja, Rustampura, Surat, Gujarat 395002
                  </p>
                </div>
              </div>
            </div>

            {/* Why Contact Us Card */}
            <div className="mt-16 p-10 rounded-[3rem] bg-gray-950 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Why consult with Grownext?
                </h4>
                <div className="space-y-4 mb-10">
                  {[
                    { icon: ShieldCheck, text: 'Official Alibaba.com verification guidance' },
                    { icon: Globe, text: 'Market hotspots & demand analysis' },
                    { icon: Zap, text: 'Competitor benchmarking for your category' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-gray-400 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="rounded-full w-full h-16 text-lg font-black shadow-2xl">
                  <a href="https://wa.me/919988339166" target="_blank" className="flex items-center justify-center gap-2">
                    Chat on WhatsApp <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              {/* Static background icon */}
              <MessageSquare className="absolute -right-8 -bottom-8 h-48 w-48 text-primary opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white p-8 lg:p-16 rounded-[3.5rem] border border-gray-100 shadow-[0_48px_100px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden"
          >
            {isSuccess ? (
              <div
                className="text-center py-16"
              >
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600 mb-8">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">Request Received!</h3>
                <p className="text-xl text-gray-600 mb-12 font-medium">
                  Thank you for your interest. An Alibaba-certified export consultant will contact you within 24 business hours.
                </p>
                <Button variant="outline" className="rounded-full px-10 h-14 font-black border-2" onClick={() => setIsSuccess(false)}>
                  Send Another Request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-black uppercase tracking-widest text-xs">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="rounded-2xl h-14 border-gray-100 bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all font-medium" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="business_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-black uppercase tracking-widest text-xs">Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Exports" {...field} className="rounded-2xl h-14 border-gray-100 bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all font-medium" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-black uppercase tracking-widest text-xs">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="rounded-2xl h-14 border-gray-100 bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all font-medium" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-black uppercase tracking-widest text-xs">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} className="rounded-2xl h-14 border-gray-100 bg-gray-50 focus:bg-white focus:ring-primary/20 transition-all font-medium" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="product_category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-black uppercase tracking-widest text-xs">Product Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-2xl h-14 border-gray-100 bg-gray-50 focus:bg-white transition-all font-medium">
                              <SelectValue placeholder="Select your category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-2xl border-gray-100 max-h-[400px]">
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Apparel &amp; Accessories</SelectLabel>
                              <SelectItem value="Apparel - Men's Clothing">Men's Clothing</SelectItem>
                              <SelectItem value="Apparel - Women's Clothing">Women's Clothing</SelectItem>
                              <SelectItem value="Apparel - Sportswear">Sportswear</SelectItem>
                              <SelectItem value="Apparel - Uniforms">Uniforms</SelectItem>
                              <SelectItem value="Apparel - Ethnic Clothing">Ethnic Clothing</SelectItem>
                              <SelectItem value="Apparel - Garment Accessories">Garment Accessories</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Consumer Electronics</SelectLabel>
                              <SelectItem value="Electronics - Mobile Phones & Accessories">Mobile Phones &amp; Accessories</SelectItem>
                              <SelectItem value="Electronics - Computer Hardware & Software">Computer Hardware &amp; Software</SelectItem>
                              <SelectItem value="Electronics - Home Audio & Video">Home Audio &amp; Video</SelectItem>
                              <SelectItem value="Electronics - Camera & Photo">Camera &amp; Photo</SelectItem>
                              <SelectItem value="Electronics - Smart Electronics">Smart Electronics</SelectItem>
                              <SelectItem value="Electronics - Video Games">Video Games &amp; Accessories</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Machinery &amp; Equipment</SelectLabel>
                              <SelectItem value="Machinery - Agriculture">Agriculture Machinery</SelectItem>
                              <SelectItem value="Machinery - Building Material">Building Material Machinery</SelectItem>
                              <SelectItem value="Machinery - Chemical & Pharma">Chemical &amp; Pharmaceutical Machinery</SelectItem>
                              <SelectItem value="Machinery - Engine & Parts">Engine &amp; Parts</SelectItem>
                              <SelectItem value="Machinery - General Industrial">General Industrial Equipment</SelectItem>
                              <SelectItem value="Machinery - Packaging">Packaging Machinery</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Home &amp; Garden</SelectLabel>
                              <SelectItem value="Home - Kitchen & Tabletop">Kitchen &amp; Tabletop</SelectItem>
                              <SelectItem value="Home - Home Decor">Home Decor</SelectItem>
                              <SelectItem value="Home - Household Cleaning">Household Cleaning Tools</SelectItem>
                              <SelectItem value="Home - Pet Products">Pet Products</SelectItem>
                              <SelectItem value="Home - Garden Supplies">Garden Supplies</SelectItem>
                              <SelectItem value="Home - Storage & Organization">Home Storage &amp; Organization</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Beauty &amp; Personal Care</SelectLabel>
                              <SelectItem value="Beauty - Makeup">Makeup</SelectItem>
                              <SelectItem value="Beauty - Skin Care">Skin Care</SelectItem>
                              <SelectItem value="Beauty - Hair Care">Hair Care</SelectItem>
                              <SelectItem value="Beauty - Manicure & Pedicure">Manicure &amp; Pedicure</SelectItem>
                              <SelectItem value="Beauty - Perfume & Deodorant">Perfume &amp; Deodorant</SelectItem>
                              <SelectItem value="Beauty - Oral Hygiene">Oral Hygiene</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Agriculture &amp; Food</SelectLabel>
                              <SelectItem value="Agro - Spices & Seasoning">Spices &amp; Seasoning</SelectItem>
                              <SelectItem value="Agro - Agricultural Produce">Agricultural Produce</SelectItem>
                              <SelectItem value="Agro - Grain">Grain</SelectItem>
                              <SelectItem value="Agro - Beans">Beans</SelectItem>
                              <SelectItem value="Agro - Nuts & Kernels">Nuts &amp; Kernels</SelectItem>
                              <SelectItem value="Agro - Plant & Animal Oil">Plant &amp; Animal Oil</SelectItem>
                              <SelectItem value="Agro - Processed Food">Processed Food</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Jewelry &amp; Accessories</SelectLabel>
                              <SelectItem value="Jewelry - Loose Diamonds">Loose Diamonds</SelectItem>
                              <SelectItem value="Jewelry - Loose Gemstones">Loose Gemstones</SelectItem>
                              <SelectItem value="Jewelry - Fine Jewelry">Fine Jewelry</SelectItem>
                              <SelectItem value="Jewelry - Fashion Jewelry">Fashion Jewelry</SelectItem>
                              <SelectItem value="Jewelry - Watch & Accessories">Watch &amp; Accessories</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-primary uppercase tracking-widest px-4 pt-3 pb-1">Chemicals &amp; Plastics</SelectLabel>
                              <SelectItem value="Chemicals - Basic Organic">Basic Organic Chemicals</SelectItem>
                              <SelectItem value="Chemicals - Basic Inorganic">Basic Inorganic Chemicals</SelectItem>
                              <SelectItem value="Chemicals - Industrial Gas">Industrial Gas</SelectItem>
                              <SelectItem value="Chemicals - Catalyst & Auxiliaries">Catalyst &amp; Chemical Auxiliaries</SelectItem>
                              <SelectItem value="Chemicals - Plastics & Products">Plastics &amp; Products</SelectItem>
                              <SelectItem value="Chemicals - Rubber & Products">Rubber &amp; Products</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel className="text-[10px] font-black text-[#58595B] uppercase tracking-widest px-4 pt-3 pb-1">Other</SelectLabel>
                              <SelectItem value="Other - Not Listed">Other / Not Listed</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-black uppercase tracking-widest text-xs">Export Goals (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your products and target markets..."
                            className="rounded-2xl min-h-[140px] resize-none border-gray-100 bg-gray-50 focus:bg-white transition-all font-medium p-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-2xl h-18 text-xl font-black shadow-2xl shadow-primary/25 group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <span className="flex items-center gap-3">
                        Book Free Consultation <Send className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            )}

            {/* Background pattern */}
            <div className="absolute top-0 right-0 h-64 w-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  )
}
