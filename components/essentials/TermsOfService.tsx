import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} max-w-2xl mx-auto">
            These terms govern your use of Doora&apos;s platform and services. 
            Please read them carefully before using our marketplace.
          </p>
          <p className="text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}} mt-2">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                By accessing or using Doora&apos;s platform, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Platform Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mb-4">
                Doora is a secondhand fashion marketplace that connects buyers and sellers in the 
                Middle East region. Our platform facilitates:
              </p>
              <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                <li>Buying and selling of pre-owned fashion items</li>
                <li>Communication between users through our messaging system</li>
                <li>Payment processing and transaction management</li>
                <li>Delivery coordination and tracking</li>
                <li>User profiles and community features</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Account Creation</h4>
                <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                  You must create an account to use certain features of our platform. You are responsible 
                  for maintaining the confidentiality of your account credentials and for all activities 
                  that occur under your account.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Account Requirements</h4>
                <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                  <li>You must be at least 18 years old or have parental consent</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain only one account per person</li>
                  <li>Not share your account with others</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Seller Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Item Listings</h4>
                <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                  <li>Provide accurate descriptions and photos of items</li>
                  <li>Set fair and reasonable prices</li>
                  <li>Only list items you own and have the right to sell</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not list prohibited or restricted items</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Transaction Management</h4>
                <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                  <li>Respond promptly to buyer inquiries</li>
                  <li>Ship items within the specified timeframe</li>
                  <li>Package items securely and appropriately</li>
                  <li>Provide accurate tracking information</li>
                  <li>Handle returns and refunds according to our policies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Buyer Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                <li>Review item descriptions and photos carefully before purchasing</li>
                <li>Ask questions if you need clarification about an item</li>
                <li>Pay for items promptly after purchase</li>
                <li>Provide accurate shipping information</li>
                <li>Inspect items upon delivery and report issues promptly</li>
                <li>Leave honest and fair reviews for sellers</li>
                <li>Follow our return and refund policies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mb-4">
                The following activities are strictly prohibited on our platform:
              </p>
              <ul className="list-disc list-inside style={{color: 'oklch(0.2354 0.0041 84.59)'}} space-y-1">
                <li>Listing counterfeit, stolen, or illegal items</li>
                <li>Manipulating prices or engaging in fraudulent activities</li>
                <li>Harassing, threatening, or abusing other users</li>
                <li>Creating fake accounts or reviews</li>
                <li>Attempting to circumvent our fees or payment systems</li>
                <li>Violating intellectual property rights</li>
                <li>Spamming or sending unsolicited messages</li>
                <li>Using automated tools or bots</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Payment and Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Transaction Fees</h4>
                <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                  Doora charges a small commission on successful sales to maintain and improve our platform. 
                  Current fee structures are available on our website and may be updated with notice.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Payment Processing</h4>
                <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                  All payments are processed securely through our trusted payment partners. We use 
                  an escrow system to protect both buyers and sellers during transactions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                The Doora platform, including its design, functionality, and content, is protected by 
                copyright, trademark, and other intellectual property laws. You may not copy, modify, 
                distribute, or create derivative works without our express written permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                Your privacy is important to us. Please review our Privacy Policy to understand how 
                we collect, use, and protect your personal information. By using our platform, you 
                consent to our privacy practices as described in our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Platform Mediation</h4>
                <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                  We provide dispute resolution services to help resolve conflicts between buyers and 
                  sellers. Our team will review evidence and make fair decisions based on our policies.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Legal Jurisdiction</h4>
                <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                  These terms are governed by the laws of Lebanon. Any legal disputes will be resolved 
                  in the courts of Beirut, Lebanon, unless otherwise required by applicable law.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                Doora provides a platform for users to buy and sell items. We are not responsible for 
                the quality, safety, or legality of items listed, the accuracy of listings, or the 
                ability of sellers to complete transactions. Our liability is limited to the maximum 
                extent permitted by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                We reserve the right to suspend or terminate accounts that violate these terms or 
                engage in prohibited activities. You may also terminate your account at any time 
                by contacting our support team.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                We may update these terms from time to time. We will notify users of significant 
                changes through our platform or email. Continued use of our services after changes 
                constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>14. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="style={{color: 'oklch(0.2354 0.0041 84.59)'}} mb-4">
                If you have questions about these terms, please contact us:
              </p>
              <div className="space-y-2 style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
                <p>Email: legal@doora.com</p>
                <p>Address: Doora Lebanon, Beirut, Lebanon</p>
                <p>Phone: +961 XX XXX XXX</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />
        
        <div className="text-center text-sm style={{color: 'oklch(0.2354 0.0041 84.59)'}}">
          <p>
            By using Doora, you acknowledge that you have read, understood, and agree to be bound 
            by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
