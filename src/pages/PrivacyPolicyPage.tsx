import React from 'react';
import EditableText from '../components/cms/EditableText';
import EditableSection from '../components/cms/EditableSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-gradient-to-br from-[#004FED]/5 via-white to-[#0066FF]/10">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableText
            id="privacy-hero-title"
            defaultContent="Privacy Policy"
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            tag="h1"
          />
          <EditableText
            id="privacy-hero-subtitle"
            defaultContent="Upward ERP"
            className="text-2xl text-[#004FED] font-semibold mb-4"
            tag="h2"
          />
          <EditableText
            id="privacy-effective-date"
            defaultContent="Effective Date: June 1, 2024"
            className="text-lg text-gray-600"
            tag="p"
          />
        </div>
      </section>

      {/* Privacy Policy Content */}
      <EditableSection
        id="privacy-policy-content"
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <EditableText
                id="privacy-introduction-title"
                defaultContent="1. Introduction"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <EditableText
                  id="privacy-intro-1"
                  defaultContent="Welcome to Upward ERP (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Enterprise Resource Planning (ERP) application (the &quot;Service&quot;)."
                  className="text-lg"
                  tag="p"
                />
                <EditableText
                  id="privacy-intro-2"
                  defaultContent="This policy is provided by Upward Digital Co., Ltd, located at 39(A), Taung Wine Road, Mawlamyine, Mon State, Myanmar."
                  className="text-lg"
                  tag="p"
                />
                <EditableText
                  id="privacy-intro-3"
                  defaultContent="Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the service."
                  className="text-lg"
                  tag="p"
                />
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <EditableText
                id="privacy-collect-title"
                defaultContent="2. Information We Collect"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id="privacy-collect-intro"
                defaultContent="We may collect information about you in a variety of ways. The information we may collect via the Service includes:"
                className="text-lg text-gray-700 mb-6"
                tag="p"
              />
              
              <div className="space-y-8">
                <div>
                  <EditableText
                    id="privacy-personal-data-title"
                    defaultContent="A. Personal Data You Provide to Us:"
                    className="text-xl font-semibold text-gray-900 mb-4"
                    tag="h3"
                  />
                  <EditableText
                    id="privacy-personal-data-content"
                    defaultContent="When you create an account, you provide us with personally identifiable information, such as your name, username, email address, and role within your organization. You and your users may also input business-related data, including information about leads, clients, and sales."
                    className="text-lg text-gray-700"
                    tag="p"
                  />
                </div>
                
                <div>
                  <EditableText
                    id="privacy-facebook-title"
                    defaultContent="B. Information from Facebook Login and Ads Integration:"
                    className="text-xl font-semibold text-gray-900 mb-4"
                    tag="h3"
                  />
                  <EditableText
                    id="privacy-facebook-intro"
                    defaultContent="To provide our Facebook Ads management features, we require you to connect your Facebook account. When you grant us permission, we collect the following information via the Facebook API:"
                    className="text-lg text-gray-700 mb-4"
                    tag="p"
                  />
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                    <li><strong>Basic Profile Information:</strong> Your name, email address, and profile picture.</li>
                    <li><strong>Ad Account Information:</strong> A list of Facebook Ad Accounts you have access to, including their names and unique IDs.</li>
                    <li><strong>Facebook Page Information:</strong> A list of Facebook Pages associated with your ad accounts, including their names and unique IDs.</li>
                    <li><strong>Campaign Data:</strong> Information related to your advertising campaigns, such as campaign names, status, and performance metrics, as needed to provide the Service.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <EditableText
                id="privacy-use-title"
                defaultContent="3. How We Use Your Information"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id="privacy-use-intro"
                defaultContent="Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:"
                className="text-lg text-gray-700 mb-6"
                tag="p"
              />
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                <li>Create and manage your account.</li>
                <li>Provide the core functionalities of our ERP service.</li>
                <li><strong>Enable Facebook Ads Integration:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Display your connected Facebook Ad Accounts and Pages within our platform.</li>
                    <li>Allow you to link your Facebook Pages to your client records within the ERP for streamlined campaign management.</li>
                    <li>Fetch and display campaign data and performance metrics for reporting and analysis purposes.</li>
                  </ul>
                </li>
                <li>Communicate with you regarding your account or support requests.</li>
                <li>Improve the efficiency and operation of the Service.</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="mb-12">
              <EditableText
                id="privacy-sharing-title"
                defaultContent="4. Data Sharing and Disclosure"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-4 text-lg text-gray-700">
                <EditableText
                  id="privacy-sharing-1"
                  defaultContent="We are committed to keeping your data secure and private."
                  tag="p"
                />
                <EditableText
                  id="privacy-sharing-2"
                  defaultContent="We do not sell, rent, trade, or share your personal information with third parties for their marketing purposes."
                  tag="p"
                />
                <EditableText
                  id="privacy-sharing-3"
                  defaultContent="Information collected from the Facebook API is used exclusively to provide and improve the features of the Service as described in this policy. It is not shared with any external parties, except as required by law."
                  tag="p"
                />
                <EditableText
                  id="privacy-sharing-4"
                  defaultContent="We may disclose your information if we are required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend our rights or property, or (iii) protect the personal safety of users of the Service or the public."
                  tag="p"
                />
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <EditableText
                id="privacy-security-title"
                defaultContent="5. Data Security"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id="privacy-security-content"
                defaultContent="We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse."
                className="text-lg text-gray-700"
                tag="p"
              />
            </div>

            {/* Your Rights and Data Deletion */}
            <div className="mb-12">
              <EditableText
                id="privacy-rights-title"
                defaultContent="6. Your Rights and Data Deletion"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <div className="space-y-6">
                <EditableText
                  id="privacy-rights-1"
                  defaultContent="You have rights regarding your personal data. You can access and update most of your information through your account settings."
                  className="text-lg text-gray-700"
                  tag="p"
                />
                
                <div>
                  <EditableText
                    id="privacy-deletion-title"
                    defaultContent="Instructions for Data Deletion:"
                    className="text-xl font-semibold text-gray-900 mb-4"
                    tag="h3"
                  />
                  <EditableText
                    id="privacy-deletion-1"
                    defaultContent="We provide a straightforward way for you to request the deletion of your data, including all information obtained through Facebook Login."
                    className="text-lg text-gray-700 mb-4"
                    tag="p"
                  />
                  
                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div>
                      <EditableText
                        id="privacy-disconnect-title"
                        defaultContent="Disconnect from Facebook:"
                        className="text-lg font-semibold text-gray-900 mb-2"
                        tag="h4"
                      />
                      <EditableText
                        id="privacy-disconnect-content"
                        defaultContent="You can remove our application's permissions from your Facebook account by visiting your Facebook &quot;Apps and Websites&quot; settings here:"
                        className="text-gray-700 mb-2"
                        tag="p"
                      />
                      <a 
                        href="https://www.facebook.com/settings?tab=applications" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#004FED] hover:text-[#0066FF] font-semibold underline"
                      >
                        https://www.facebook.com/settings?tab=applications
                      </a>
                      <EditableText
                        id="privacy-disconnect-note"
                        defaultContent="This will prevent our application from accessing any further data from Facebook."
                        className="text-gray-700 mt-2"
                        tag="p"
                      />
                    </div>
                    
                    <div>
                      <EditableText
                        id="privacy-request-title"
                        defaultContent="Request Data Deletion from Our Servers:"
                        className="text-lg font-semibold text-gray-900 mb-2"
                        tag="h4"
                      />
                      <EditableText
                        id="privacy-request-content"
                        defaultContent="To request the permanent deletion of all data we have stored about you and your account, please send an email to contact@upwardmm.com with the subject line &quot;Data Deletion Request.&quot; Please include your account username or email in the body of the message. We will process your request and permanently delete your account data within 30 days."
                        className="text-gray-700"
                        tag="p"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <EditableText
                id="privacy-changes-title"
                defaultContent="7. Changes to This Privacy Policy"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id="privacy-changes-content"
                defaultContent="We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top."
                className="text-lg text-gray-700"
                tag="p"
              />
            </div>

            {/* Contact Us */}
            <div className="mb-8">
              <EditableText
                id="privacy-contact-title"
                defaultContent="8. Contact Us"
                className="text-3xl font-bold text-gray-900 mb-6"
                tag="h2"
              />
              <EditableText
                id="privacy-contact-intro"
                defaultContent="If you have questions or comments about this Privacy Policy, please contact us at:"
                className="text-lg text-gray-700 mb-4"
                tag="p"
              />
              <div className="bg-gradient-to-r from-[#004FED]/10 to-[#0066FF]/10 rounded-xl p-6">
                <EditableText
                  id="privacy-company-name"
                  defaultContent="Upward Digital Co., Ltd"
                  className="text-xl font-bold text-gray-900 mb-2"
                  tag="h3"
                />
                <EditableText
                  id="privacy-company-address"
                  defaultContent="39(A), Taung Wine Road, Mawlamyine, Mon State, Myanmar"
                  className="text-lg text-gray-700 mb-2"
                  tag="p"
                />
                <EditableText
                  id="privacy-company-email"
                  defaultContent="Email: contact@upwardmm.com"
                  className="text-lg text-gray-700"
                  tag="p"
                />
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200">
              <EditableText
                id="privacy-last-updated"
                defaultContent="Last Updated: June 1, 2024"
                className="text-sm text-gray-500"
                tag="p"
              />
            </div>
          </div>
        </div>
      </EditableSection>
    </div>
  );
};

export default PrivacyPolicyPage;
