import Navigation from "./Navigation";

export default function GuestLayout({children, hideNavigation = true}){
    return(

        <>
            {!hideNavigation && <Navigation showBigImage={true} />}
            <main className="main">{children}</main>
        </>
    )
}