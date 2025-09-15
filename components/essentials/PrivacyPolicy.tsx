import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how Doora collects, 
            uses, and protects your personal information.
          </p>
          <p className="text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}} mt-2">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This includes:
                </p>
                <ul className="list-disc list-inside mt-2 style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                  <li>Name, email address, and phone number</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Profile information and preferences</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Usage Information</h4>
                <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                  We automatically collect information about how you use our platform, including:
                </p>
                <ul className="list-disc list-inside mt-2 style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our platform</li>
                  <li>Search queries and interaction data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Personalize your experience and content</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect and prevent fraudulent transactions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With other users as part of the marketplace functionality (seller/buyer information)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                <li>Access and review your personal information</li>
                <li>Correct or update your information</li>
                <li>Delete your account and personal information</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability (receive a copy of your data)</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mt-4">
                To exercise these rights, please contact us at privacy@doora.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                We use cookies and similar tracking technologies to collect information about your 
                browsing activities and to provide personalized content and advertisements. You can 
                control cookies through your browser settings, but disabling cookies may affect 
                the functionality of our platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Regional Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Lebanon and MENA Region</h4>
                  <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                    We comply with applicable data protection laws in Lebanon and the broader MENA region, 
                    including local privacy regulations and cross-border data transfer requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">GDPR Compliance</h4>
                  <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                    For users in the European Union, we comply with the General Data Protection 
                    Regulation (GDPR) and provide additional rights and protections as required.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the new policy on our platform and updating the 
                &quot;Last updated&quot; date. Your continued use of our services after any changes 
                constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mb-4">
                If you have any questions about this privacy policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                <p>Email: privacy@doora.com</p>
                <p>Address: Doora Lebanon, Beirut, Lebanon</p>
                <p>Phone: +961 XX XXX XXX</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />
        
        <div className="text-center text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
          <p>
            This privacy policy is part of our commitment to transparency and your privacy rights. 
            By using Doora, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>
      </div>
    </div>
  );
}
