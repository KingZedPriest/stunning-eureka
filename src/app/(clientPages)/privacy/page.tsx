//Import Header component
import SecondHeader from "@/components/SecondHeader";

import CTA from "@/components/(LandingPageComponents)/CTA";

export default function Privacy() {
  const headerProps = {
    heading: "Privacy",
    coloredPart: "Statement",
    route: "Privacy",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
      <div className="flex flex-col gap-y-3 px-4 pt-[8rem] sm:px-10 md:px-12 lg:px-14">
        <h1 className="text-lg font-[620] sm:text-xl md:text-2xl lg:text-3xl">
          What information do we collect about you and how do we collect it?
        </h1>
        <div className="mt-4 text-xs font-medium sm:text-sm lg:text-base">
          <p>
            You are not required (by law or by any contract with us) to provide
            personal information to us via this website. We will only require
            you to provide personal information to us where it is necessary for
            us to provide you with a service at your request.
          </p>
          <p className="my-2 font-bold capitalize">
            Information you provide to us
          </p>
          <p>
            We may receive personal information about you whenever you contact
            us. For example, by doing the following:
          </p>
          <ul className="my-2 flex list-disc flex-col gap-y-2">
            <li>Enquiring about our products or services</li>
            <li>Using and browsing our website</li>
            <li>Telephoning, texting, writing by post or emailing us</li>
            <li>Enquiring about, or applying for, job vacancies</li>
          </ul>
          <p className="font-bold capitalize">
            This information may include the following:
          </p>
          <ul className="flex list-disc flex-col gap-y-2">
            <li>
              Normal identification information, such as your full name and
              title
            </li>
            <li>
              Contact information, such as your postal address, email address
              and telephone number
            </li>
            <li>
              Additional information relevant to your use of our site and
              services, such as your marketing preferences, survey responses and
              feedback
            </li>
            <li>Information about your shipment, including the recipient</li>
            <li>Your VAT status (for international shipments)</li>
            <li>
              Payment information (this is securely collected and processed by
              our payment provider)
            </li>
            <li>
              In respect of job applications, your CV including details of your
              education and employment history (and any other information which
              you may choose to provide to us with your CV)
            </li>
          </ul>
          <p className="my-2 font-bold capitalize">
            Information we collect about you on our website
          </p>
          <p>
            We collect information using cookies and other similar technologies
            to help distinguish you from other users of our website. These can
            streamline your online experience by saving you from re-inputting
            some information and also allow us to make improvements to our
            website
          </p>
          <p className="my-2 font-bold capitalize">
            When you visit our website, we may collect the following
            information:
          </p>
          <ul className="flex list-disc flex-col gap-y-2">
            <li>
              The User Agent (device) details supplied by your internet browser
            </li>
            <li>
              {" "}
              A device identifier (cookie or IP address) and general location
              for fraud prevention
            </li>
            <li>
              Details of your visits to our website and the resources that you
              access, including, but not limited to, website pages, links,
              traffic data, location data, weblogs and other communication data
            </li>
            <li>
              Where orders originate from advertising sources, we record the
              source of each order. This is purely to allow us to assess the
              effectiveness of these adverts and is not used for customer
              profiling of any kind.
            </li>
          </ul>
          <p className="my-2 font-bold uppercase">
            Our website is not intended for children and we do not knowingly
            collect data relating to children.
          </p>
          <p className="font-bold capitalize">
            Information we collect about you from other sources
          </p>
          <p className="my-2 font-bold uppercase">
            We do not collect information about you from other sources.
          </p>
          <ul className="flex list-disc flex-col gap-y-2">
            <li>
              If you apply for a job, we may collect information about your
              criminal record by obtaining a DBS check through an approved
              agency and view information you have shared publicly, including on
              social media.
            </li>
          </ul>
          <p className="my-2">
            This list is not exhaustive and, in specific instances, we may need
            to collect additional data for the purposes set out in this policy.
          </p>
          <p className="font-bold capitalize">
            Information we receive about you from other sources
          </p>
          <p className="my-2">
            Sometimes you will have given your consent for other websites,
            services or third parties to provide information to us. This could
            include information we receive about you if you use any of the other
            websites that we operate or the other services that we provide, in
            which case we will have informed you when we collected that data if
            we intend to share those data internally and combine it with data
            collected on this site. We will also have told you for what purpose
            we will share and combine your data. <br /> <br />
            It could also include information from third parties that we work
            with to provide our products and services, such as payment
            processors, delivery companies, technical support companies and
            advertising companies. Whenever we receive information about you
            from these third parties, we will let you know what information we
            have received and how and why we intend to use it.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-y-2 text-xs font-medium sm:text-sm lg:text-base">
          <h1 className="text-lg font-[620] sm:text-xl md:text-2xl lg:text-3xl">
            How do we use your personal information?
          </h1>
          <p>
            We take data protection law seriously, so we have set out below
            exactly how and why we use your information, and what our legal
            basis is to be able to use your information in each way.
          </p>
          <p className="font-bold">
            Supplying our products and providing our services
          </p>
          <p>
            It is necessary for us to use personal information about you to
            enter into and perform the contracts that we make with you, such as
            when you become a customer. Using your information in this context
            is necessary so that we can:
          </p>
          <ul className="flex list-disc flex-col gap-y-2">
            <li>Provide you with information about your contract with us</li>
            <li>
              Provide you with information about our products and services
            </li>
            <li>Verify your identity</li>
            <li>Deal with any complaints you may have</li>
            <li>
              Contact you about any changes that we make to our products or
              services
            </li>
            <li>
              Administer our website, including troubleshooting problems,
              analysing statistics, conducting research and tests and keeping
              the site secure
            </li>
          </ul>
          <p>
            If you enquire about, or apply for, a job vacancy, it is necessary
            for us to use your personal information as part of the recruitment
            process, in order to assess your suitability for a particular role
          </p>
          <p className="font-bold capitalize">
            Telling you about other products or services that we think may be of
            interest to you
          </p>
          <p>
            We may use your information to identify and tell you about our
            products or services that we think may be of interest to you. We
            will only do this where you have informed us that you would like to
            receive marketing communications.
          </p>
          <p>
            We may also use your information to invite you to participate in
            market research. If we do contact you about market research, you do
            not have to participate. If you tell us that you do not want to
            receive market research communications, we will respect this.
          </p>
          <p>
            Whether you choose to receive marketing communications, or market
            research communications is entirely up to you. You can choose to
            receive both, none, or just one or the other. Your choice will not
            affect any products or services that you have purchased from us, nor
            will it affect any quotes for products or services you buy in
            future.
          </p>
          <p>
            You can update your preferences by using the links in any of our
            emails to you, or by getting in touch using the Contact Details
            section, below.
          </p>
          <p className="font-bold capitalize">
            Telling you about products or services that are similar to ones that
            you have already bought
          </p>
          <p>
            If you have already bought a service from us, or you have already
            obtained a quote from us, we may contact you with some information
            about services that are similar.
          </p>
          <p>
            We will only contact you by email or text message and you can choose
            not to receive these messages at any time. Simply follow the
            instructions in the message, or get in touch using our website.
          </p>
          <p className="font-bold capitalize">Making our business better</p>
          <p>
            We always want to offer the best products, services and experience
            that we can. Sometimes this means we may use your information to
            find ways that we can improve what we do, or how we do it
          </p>
          <p>
            In this context, we will only use your information where it is
            necessary so that we can:
          </p>
          <ul className="flex list-disc flex-col gap-y-2">
            <li>
              Review and improve our existing products and services and develop
              new ones.
            </li>
            <li>
              Review and improve the performance of our systems, processes and
              staff (including training).
            </li>
            <li>
              Improve our site to ensure that content is presented in the most
              effective manner for you and for your computer.
            </li>
            <li>
              Measure and understand the effectiveness of advertising we serve
              to you and others, and to deliver relevant advertising to you
            </li>
          </ul>
          <p className="font-bold">Contacting You</p>
          <p>
            We want to stay in touch with you. Sometimes, we may need to use the
            information that we have about you in order to respond to your
            questions or let you know about important changes.
          </p>
          <p>
            We will only use your information in this respect where it is
            necessary so that we can:
          </p>
          <ul className="flex list-disc flex-col gap-y-2">
            <li>
              Interact and respond to any communications you send us, including
              where you use the Contact Details section below, and any social
              media posts that you tag us in.
            </li>
            <li>Let you know about any important changes to our business or policies.</li>
          </ul>
        </div>
        <p className="text-xs md:text-md text-red-600">This is the summary of the policy. Contact us for the full version. THANK YOU</p>
        <p className="font-bold uppercase text-xs sm:text-sm lg:text-base">Kindly reach out to us for more information or details about any of the above policies.</p>
      </div>
      <CTA />
    </main>
  );
}
