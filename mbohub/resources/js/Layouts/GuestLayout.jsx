import Navigation from "./Navigation";

export default function GuestLayout({children, hideNavigation = true}){
    return(

        <>
            {!hideNavigation && <Navigation />}
            <main className="main">{children}</main>
        </>
    )
}