
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Phone number must be at least 6 characters." }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ open, onOpenChange }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", data);
    
    // Close the contact form
    onOpenChange(false);
    
    // Show success toast
    toast({
      title: "Success!",
      description: "Details submitted successfully. We will reach out to you within 2-4 working days.",
    });
    
    // Show success modal
    setSuccessModalOpen(true);
    
    // Reset the form
    form.reset();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px] bg-charcoal border-gold/30">
          <DialogHeader>
            <DialogTitle className="text-gold text-2xl">Contact Us</DialogTitle>
            <DialogDescription className="text-white/70">
              Fill in your details and we'll get back to you within 2-4 working days.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Smith" 
                        {...field} 
                        className="bg-dark-blue border-gold/30 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        {...field} 
                        className="bg-dark-blue border-gold/30 text-white"
                      />
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
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+1 234 567 8900" 
                        {...field} 
                        className="bg-dark-blue border-gold/30 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your requirements..." 
                        {...field} 
                        className="bg-dark-blue border-gold/30 text-white resize-none min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold/90 text-dark-blue"
              >
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-charcoal border-gold/30">
          <DialogHeader>
            <DialogTitle className="text-gold text-2xl">Thank You!</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-white">Details submitted successfully. We will reach out to you within 2-4 working days.</p>
          </div>
          <Button 
            onClick={() => setSuccessModalOpen(false)}
            className="bg-gold hover:bg-gold/90 text-dark-blue w-full"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
