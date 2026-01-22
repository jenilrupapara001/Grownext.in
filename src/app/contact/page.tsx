'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send,
  Loader2,
  CheckCircle2
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
      const { error } = await supabase
        .from('leads')
        .insert([values])

      if (error) throw error

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
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Let's Start Your <span className="text-primary">Export Journey</span>
          </h1>
          <p className="text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Ready to reach global buyers? Fill out the form below or contact us directly. Our experts are ready to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Call or WhatsApp</h4>
                  <p className="text-gray-600 mt-1">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm mt-1">Mon-Sat, 9am to 7pm IST</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                  <p className="text-gray-600 mt-1">hello@grownext.in</p>
                  <p className="text-gray-600 mt-1">support@grownext.in</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Visit Our Office</h4>
                  <p className="text-gray-600 mt-1">
                    Level 5, Export Tower, BKC, Mumbai,<br />
                    Maharashtra 400051, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-gray-950 text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Quick Consultation
                  </h4>
                  <p className="text-gray-400 mb-6">
                    Looking for a faster response? Start a chat with us on WhatsApp.
                  </p>
                  <Button asChild className="rounded-full w-full">
                    <a href="https://wa.me/919876543210" target="_blank">Chat on WhatsApp</a>
                  </Button>
               </div>
               <div className="absolute -right-8 -bottom-8 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Received!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for your interest in GrowNext. One of our export experts will contact you within 24 hours.
                </p>
                <Button variant="outline" className="rounded-full px-8" onClick={() => setIsSuccess(false)}>
                  Send Another Request
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="rounded-xl h-12" />
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
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Exports" {...field} className="rounded-xl h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="rounded-xl h-12" />
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} className="rounded-xl h-12" />
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
                        <FormLabel>Product Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl h-12">
                              <SelectValue placeholder="Select your category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="textiles">Textiles & Apparel</SelectItem>
                            <SelectItem value="agriculture">Agriculture & Food</SelectItem>
                            <SelectItem value="machinery">Machinery & Industrial</SelectItem>
                            <SelectItem value="chemicals">Chemicals & Plastics</SelectItem>
                            <SelectItem value="consumer">Consumer Electronics</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
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
                        <FormLabel>How can we help you? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your export goals..." 
                            className="rounded-xl min-h-[120px] resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-xl h-14 text-lg font-bold" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Free Consultation <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
