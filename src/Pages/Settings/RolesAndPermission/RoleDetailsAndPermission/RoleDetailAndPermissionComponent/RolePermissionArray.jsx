const RolePermissionArray = [
    {
        RoleName: "Editor", 
        id: 1,
        key2: [{
            roleTypeHeading: "Edit Content",
            secSubHeading: "Can edit text, links and media sources. In older versions of the Editor, this is equivalent to the Edit Site permission.",
            editSite: "Edit Site",
        },

        {
            roleTypeHeading: "Edit Site",
            secSubHeading: "Can edit content, site design and app settings.",
        },
        {
            roleTypeHeading: "Publish Site",
            secSubHeading: "Can publish site. ‘Edit Content’ or ‘Edit Site’ permissions are also required.",
            editSite: "Manage privacy setting",
        },]

    },
    {
        RoleName: "Site Dashboard", 
        id: 2,
        key2: [{
            roleTypeHeading: "View Dashboard",
            secSubHeading: "Can view the dashboard.",
            editSite: "Edit Site",
        },

     
    ]

    },
    {
        RoleName: "Sites (1)", 
        id: 3,
        key2: [{
            roleTypeHeading: "Invite People",
            secSubHeading: "Can invite people to work on a site, but can't edit their permissions.",
        },

      
    ]

    },
    {
        RoleName: "CMS(02)", 
        id: 4,
        key2: [{
            roleTypeHeading: "View Content",
            secSubHeading: "Can view content in collections.",
            editSite: "Add content",
        },

        {
            roleTypeHeading: "Add Content",
            secSubHeading: "Can add and edit content in existing collections.",
        },
        {
            roleTypeHeading: "Manage Backups",
            secSubHeading: "Can add, restore and delete backups for all collections.",
        },
        {
            roleTypeHeading: "Manage Indexes",
            secSubHeading: "Can add and delete indexes for all collections.",
        },
        {
            roleTypeHeading: "Manage Collections",
            secSubHeading: "Can add, delete and modify fields for all collections.",
        },
    ]

    },
    {
        RoleName: "Billing & Domains", 
        id: 5,
        key2: [{
            roleTypeHeading: "Manage Billing",
            secSubHeading: "Can manage and purchase domains, subscriptions and business email, and view billing history.",
        },

        {
            roleTypeHeading: "Manage Domains",
            secSubHeading: "Can view and manage domains only.",
            editSite:"Manage Billing"
        },
      
    ]

    },
    {
        RoleName: "Stores", 
        id: 6,
        key2: [{
            roleTypeHeading: "Manage Store",
            secSubHeading: "Can view and manage store products, categories, orders, sales channels, store settings, shipping and tax.",
        },

        {
            roleTypeHeading: "Manage Store (Limited Access)",
            secSubHeading: "Can view and manage store products, categories, settings and more, but cannot access sensitive data like orders and abandoned carts.",
        },
        {
            roleTypeHeading: "Publish Site",
            secSubHeading: "Can publish site. ‘Edit Content’ or ‘Edit Site’ permissions are also required.",
            editSite: "Manage privacy setting",
        },]

    },
    {
        RoleName: "Point of Sale", 
        id: 7,
        key2: [{
            roleTypeHeading: "Checkout Customers with POS",
            secSubHeading: "Can view & add products to cart and complete checkout.",
   
        },

        {
            roleTypeHeading: "Open Cash Drawer from POS",
            secSubHeading: "Can access the cash drawer without processing sales.",
        },
        {
            roleTypeHeading: "Apply Coupons & Custom Discounts",
            secSubHeading: "Can apply coupons and discounts with a custom amount during checkout.",
        
        },
        {
            roleTypeHeading: "View Current Day Report",
            secSubHeading: "Can view reports for the current day.",
            editSite: "View Prevoius day's report",

        
        },
        {
            roleTypeHeading: "View Previous Day's Report",
            secSubHeading: "Can view reports history for any selected day.",
        
        },
        {
            roleTypeHeading: "Manage Cash Drawer",
            secSubHeading: "Can open & close cash drawers, do pay in & pay outs, leave notes.",
        
        },
        {
            roleTypeHeading: "Manage Orders",
            secSubHeading: "Can view and manage the orders list for today.",
            editSite: "Manage Sales History History for any days",
        
        },
        {
            roleTypeHeading: "Manage Sales History for Any Day",
            secSubHeading: "Can view and manage sales history for any selected day.",
        
        },
        {
            roleTypeHeading: "View and Create Customer's Profiles",
            secSubHeading: "Can view and create customer's profiles.",
            editSite:"Manage customer profile"
        
        },
        {
            roleTypeHeading: "Manage Customer Profiles",
            secSubHeading: "Can manage (add, edit, delete) customer's profile.",
        
        },
        {
            roleTypeHeading: "Manage Discounts",
            secSubHeading: "Can view and add discount templates in the POS app.",
        
        },
        {
            roleTypeHeading: "Manage Products and Categories",
            secSubHeading: "Can view and manage products in the POS app, update pricing and inventory.",
        
        },
        {
            roleTypeHeading: "Customize Checkout & Customer Facing Screen",
            secSubHeading: "Can access customization options for the checkout screen and customer facing display.",
        
        },
        {
            roleTypeHeading: "Manage Payments Settings",
            secSubHeading: "Can access Payments Settings in the POS app.",
        
        },
        {
            roleTypeHeading: "Manage Tax Settings",
            secSubHeading: "Can access Tax Settings in the POS app.ofile.",
        
        },
        {
            roleTypeHeading: "Manage Receipts Settings",
            secSubHeading: "Can access Receipt Settings in the POS app.",
        
        },
        {
            roleTypeHeading: "Manage Cash Management Settings",
            secSubHeading: "Can access Cash Management Settings in the POS app.",
        
        },
        {
            roleTypeHeading: "Manage Team & Access Settings",
            secSubHeading: "Can access to Team & Access Settings in the POS app.",
        
        },
    ]

    },
    {
        RoleName: "Site Members", 
        id: 8,
        key2: [{
            roleTypeHeading: "Manage Site Members",
            secSubHeading: "Can manage, approve and block site members.",
        },
    ]

    },
    {
        RoleName: "Customer Management", 
        id: 9,
        key2: [{
            roleTypeHeading: "Message via Inbox & Chat",
            secSubHeading: "Can send messages via Inbox, set Chat status and view online visitors.",
            editSite: "Manage Inbox and chat setting",
        },

        {
            roleTypeHeading: "Manage Inbox & Chat Settings",
            secSubHeading: "Can edit Inbox settings including Chat, Email and Integrations",
        },
        {
            roleTypeHeading: "Manage Contacts",
            secSubHeading: "Can add, import and manage all contacts, but cannot export.",
            editSite: "View and create customer's profile",
        },
        {
            roleTypeHeading: "Export Contacts",
            secSubHeading: "Can export contacts and customer details",
        },
        {
            roleTypeHeading: "View Form Data",
            secSubHeading: "Can view form submission data.",
        },
        {
            roleTypeHeading: "Manage Tasks & Reminders",
            secSubHeading: "Can view, create and manage tasks.",
            editSite:"Manage workflows"
        },
        {
            roleTypeHeading: "Manage Workflows",
            secSubHeading: "Can create and edit workflows to track contacts' progress.",
        },
        {
            roleTypeHeading: "Set Up Automations",
            secSubHeading: "Can create and manage automated responses by email, chat and more.",
            editSite:"Manage workflow"
        },
    ]

    },
    {
        RoleName: "Marketing Tools", 
        id: 10,
        key2: [{
            roleTypeHeading: "Manage Coupons",
            secSubHeading: "Can create and manage all coupons.",
           
        },

        {
            roleTypeHeading: "Manage Social Posts",
            secSubHeading: "Can create, manage and share Social Posts.",
        },
        {
            roleTypeHeading: "Manage Facebook & Instagram Ads",
            secSubHeading: "Can view and edit a campaign. To buy or change a subscription, ‘Manage Billing’ permissions are also required.",
        },
        {
            roleTypeHeading: "Manage Google Ads",
            secSubHeading: "Can make limited campaign changes. To make changes related to ad credits, ‘Manage Billing’ permissions are required.",
        },
        {
            roleTypeHeading: "Manage your Google Business Profiles",
            secSubHeading: "Can create and manage Business Profiles.",
        },
        {
            roleTypeHeading: "Manage SEO Tools",
            secSubHeading: "Can use SEO Tools. For access to SEO Wiz, 'Publish Site' permissions are also required.",
        },
        {
            roleTypeHeading: "Manage Marketing Integrations",
            secSubHeading: "Can connect, add and manage marketing integration tools.",
        },
        {
            roleTypeHeading: "Manage Triggered Emails",
            secSubHeading: "Can create and manage Triggered Emails.",
            editSite:"Setup automations"
        },
        {
            roleTypeHeading: "Manage Email Marketing Campaigns",
            secSubHeading: "Can create and manage email marketing campaigns.",
            editSite:"Manage site members"
        },
        {
            roleTypeHeading: "Manage Video Maker",
            secSubHeading: "Can create, edit and publish videos with the Video Maker.",
        },
        {
            roleTypeHeading: "Manage Loyalty",
            secSubHeading: "Can create and manage the settings, ways to earn, and rewards of a loyalty program. Can also manage tiers.",
        },
    ]

    },
    {
        RoleName: "Analytics", 
        id: 11,
        key2: [{
            roleTypeHeading: "View Site Analytics",
            secSubHeading: "Can view all site analytics and statistics.",
        },
    ]

    },
   
    {
        RoleName: "Payments & Finances", 
        id: 12,
        key2: [{
            roleTypeHeading: "View Payments",
            secSubHeading: "Can view payments and other financial information.",
            editSite: "Add fund ,manage refunds and chargebacks",
        },

        {
            roleTypeHeading: "Manage Invoices & Quotes",
            secSubHeading: "Can view, create and send invoices & price quotes, and edit invoice & quote settings.",
        },
        {
            roleTypeHeading: "Manage payment options",
            secSubHeading: "Can connect and manage payment options.",
            edit:"Setup and manage Bacwoodaroma payments"
        },
        {
            roleTypeHeading: "Set up and manage Bacwoodaroma Payments",
            secSubHeading: "Can complete the Wix Payments setup, edit personal & bank details, manage payment methods and set the payout schedule.",
        },
        {
            roleTypeHeading: "Add funds, manage refunds & chargebacks",
            secSubHeading: "Can add funds to the account, dispute chargebacks for payments accepted with Wix Payments and issue refunds for certain providers."
        },
        {
            roleTypeHeading: "View settlement reports & payouts",
            secSubHeading: "Can view Wix Payments transaction history, funds sent to your bank, and any funds in reserve.",
            editSite:"Add funds,manage refunds and chargebacks"
        },
    ]

    },
    {
        RoleName: "Logo Maker", 
        id: 13,
        key2: [{
            roleTypeHeading: "Manage Logos",
            secSubHeading: "Can access My Logos to edit and download logo files.",
        },
    ]

    },
    {
        RoleName: "FAQs", 
        id: 14,
        key2: [{
            roleTypeHeading: "View FAQs",
            secSubHeading: "Can open and view FAQs on the site.",
        },

        {
            roleTypeHeading: "Manage FAQs",
            secSubHeading: "Can view, create, edit and reorder FAQs.",
        },
    ]

    },
    {
        RoleName: "Privacy Center", 
        id: 15,
        key2: [{
            roleTypeHeading: "Manage Privacy Settings",
            secSubHeading: "Can add a cookie banner and manage visitor data.",
        },
    ]

    },
    {
        RoleName: "App Market", 
        id: 16,
        key2: [{
            roleTypeHeading: "Install Apps",
            secSubHeading: "Can install and update apps on the site.",
            
        },

        {
            roleTypeHeading: "Manage Apps",
            secSubHeading: "Can view, delete, rate and edit app info.",
        },
        {
            roleTypeHeading: "Manage Multilingual",
            secSubHeading: "Can add languages, translate over the editor and back office and can manage all Multilingual settings",
        },]

    },
    {
        RoleName: "Multilingual", 
        id: 17,
        key2: [{
            roleTypeHeading: "Edit Content",
            secSubHeading: "Can edit text, links and media sources. In older versions of the Editor, this is equivalent to the Edit Site permission.",
            editSite: "Edit Site",
        },

        {
            roleTypeHeading: "Translate Website Apps",
            secSubHeading: "Can translate apps content in the Multilingual dashboard.",
        },
    ]

    },
    {
        RoleName: "Portfolio", 
        id: 18,
        key2: [{
            roleTypeHeading: "Manage Portfolio",
            secSubHeading: "Can view, create, and delete projects",
        },
    ]

    },
    {
        RoleName: "Mobile apps", 
        id: 19,
        key2: [{
            roleTypeHeading: "Manage Branded Apps",
            secSubHeading: "Description: Can manage, edit and submit the Branded app",
        },
    ]
    },
   

]
export default RolePermissionArray