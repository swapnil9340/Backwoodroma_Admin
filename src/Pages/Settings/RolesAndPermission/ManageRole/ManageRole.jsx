import RoleType from "./MangageRoleComponent/RoleTypes"
import RolesAndPermissionHeader from "../RolesAndPermissionComponent/RolesAndPermissionHeader"
const ManageRole = () => {
    const GeneralRoleArray = [
        {
            items: "Admin(Co owner)",
            description: "Has access to edit, publish and manage site, including billing, payment & financial info, domains and inviting people, but can't delete or transfer the site.",
            request: "Not assigned"
        },
        {
            items: "Website manager",
            description: "Has access to manage, edit & publish site, but cannot manage billing, delete, duplicate or transfer site.",
            request: "Not assigned"

        },
        {
            items: "Back Office Manager",
            description: "Can access the Dashboard to manage site settings and apps but cannot edit the site.",
            request: "Not assigned"

        }

    ]
    const CmsRoleArray = [
        {
            items: "CMS Editor",
            description: "Can add and modify content for all collections, but cannot edit other areas of your site.",
            request: "Not assigned"
        },
        {
            items: "CMS Admin",
            description: "Can modify content and field structure for all collections, but cannot edit other areas of your site.",
            request: "Not assigned"

        },
    ]
    const MarketingAndCustomerRoleArray = [
        {
            items: "Marketing Manager",
            description: "Can manage all marketing tools, contacts, automation, and view site analytics..",
            request: "Not assigned"
        },
        {
            items: "Customer Relations Manager",
            description: "Can manage contacts, forms, tasks, workflows, automations, and communicate in inbox, but cannot export contacts.",
            request: "Not assigned"

        },
    ]
    const StoreRoleArray = [
        {
            items: "Store Manager",
            description: "Can view and manage store products, categories, orders, sales channels, store settings, shipping and tax..",
            request: "Not assigned"
        },
       
    ]
    const PointOfSaleRoleArray = [
        {
            items: "Store Manager",
            description: "Can perform all actions in POS and access the Dashboard, but cannot edit payment details or site.",
            request: "Not assigned"
        },
        {
            items:"Cashier",
            description: "Can checkout customers with POS, but cannot access the Dashboard or edit product catalog..",
            request: "Not assigned"
        }
       
    ]
    const PaymentsRoleArray = [
        {
            items: "Payments Manager",
            description: "Can view and manage customer payments, but cannot purchase domains or subscriptions. Note: If you unassign all collaborators, this role will no longer be available. You can assign the same permissions using the new roles or create a custom one..",
            request: "Not assigned"
        },
        {
            items:"Payments Admin",
            description: "Has full access to set up Wix Payments, manage payment options & money in the account, and view payments, payouts, & settlement reports. Ideal for co-owners..",
            request: "Not assigned"
        },
        {
            items:"Financial Manager",
            description: "Can manage money in the account and view payments, payouts & settlement reports. Ideal for accountants..",
            request: "Not assigned"
        }
       
    ]
    return (
        <div className="container-fluid">
            <div className="col-10  manageRoleContainer">
                <div className="col-12 manageRoleCenterContainer">
                   <div className="col-lg-10 col-12">
                      <RolesAndPermissionHeader firstHeading={"Manage Roles"}
                      secHeading={"Create, view and edit roles & permissions for this site."}
                      />   
                   </div>
                    <div className="col-lg-10 col-12 ">
                    <RoleType GeneralRoleArray={GeneralRoleArray} role={"General Role"}/>
                    <RoleType GeneralRoleArray={CmsRoleArray} role={"CMS Role"}/>
                    <RoleType GeneralRoleArray={MarketingAndCustomerRoleArray} role={"Marketing and Customer Management Roles"}/>
                    <RoleType GeneralRoleArray={StoreRoleArray} role={"Store Roles"}/>
                    <RoleType GeneralRoleArray={PointOfSaleRoleArray} role={"Point Of Sale Roles"}/>
                    <RoleType GeneralRoleArray={PaymentsRoleArray} role={"Payments  Roles"}/>



                    </div>

                </div>
            </div>


        </div>
    )
}
export default ManageRole