import InputAdornment from "@mui/material/InputAdornment"
import useStyles from "../../../../../Style"
import { TextField } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"
import { FiChevronRight } from "react-icons/fi"
import RolePermissionListToggle from "./RolePermissionListToggle"
import React from "react"
const RolePermission = () => {

    const [Values, SetValues] = React.useState([])
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
                roleTypeHeading: "Manage Orders",
                secSubHeading: "Can view and manage the orders list for today.",
            
            },
        ]

        },
        {
            RoleName: "Point of Sale", 
            id: 8,
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
            RoleName: "Site Members", 
            id: 9,
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
            RoleName: "Customer Management", 
            id: 10,
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
            RoleName: "Marketing Tools", 
            id: 11,
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
            RoleName: "Analytics", 
            id: 12,
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
            RoleName: "Marketing Tools", 
            id: 13,
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
            RoleName: "Payments & Finances", 
            id: 14,
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
            RoleName: "Logo Maker", 
            id: 15,
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
            RoleName: "FAQs", 
            id: 16,
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
            RoleName: "Privacy Center", 
            id: 17,
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
            RoleName: "App Market", 
            id: 18,
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
            RoleName: "Multilingual", 
            id: 19,
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
            RoleName: "Portfolio", 
            id: 20,
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
            RoleName: "Mobile apps", 
            id: 21,
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
       

    ]
    const SiteDashBoardArray = [
        {
            roleTypeHeading: "View Dashboard",
            secSubHeading: "Can view the dashboard.",
            editSite: "Edit Site",
        },
    
    ]

    const classes = useStyles()
    return (
        <div className="col-12 rolePermission_container">
            <form>
                <div className="col-12 rolePermisionHeaderContainer">
                    <div className="col-lg-9 col-md-8 col-6">
                        <h1 className="roleDetailsSechaedings">Permissions (44)</h1>
                        <p className="roleDetailsSechaedings">People with this role can perform the following actions.</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 roles_permission_Searchbar">
                        <TextField
                            className={`${classes.RoleAndPermissionSearchBarTextfield}`}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AiOutlineSearch size={18} color="#31B665" />
                                    </InputAdornment>
                                )
                            }}
                            type="text" size="small" />

                    </div>

                </div>
                <div className="col-12 rolePermissionLists_container">
                    <ol className="rolePermissionOrderList">
                        {RolePermissionArray.map((items, index) => {
                            return (
                                <li className="rolePermissionListsStyles" key={index}  onClick={() => SetValues({...Values, [items.id]:!Values[items.id]})}>
                                    <div className="rolePermissionIcon_listContainer">
                                        <span><FiChevronRight color="31B665" size={18} /></span>
                                        <span className="rolePermissionListName">{items.RoleName}</span>
                                    </div>
                                    {
                                        Values[items.id] === true && <RolePermissionListToggle RolePermissionArray={items.key2} />
                                    }



                                </li>
                            )
                        })}
                    </ol>

                </div>
            </form>
        </div>
    )
}
export default RolePermission