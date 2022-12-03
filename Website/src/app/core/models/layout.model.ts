import { Layout } from "../enums/layout.enum";

export class LayoutModel{
    
    layoutOptionsModel: LayoutOptionsModel;

    constructor() {
        this.layoutOptionsModel = new LayoutOptionsModel();
    }

    buildFullLayout() : LayoutOptionsModel{
        var model = new LayoutOptionsModel(
                            Layout[Layout.Navbar],
                            Layout[Layout.Header],
                            Layout[Layout.Footer],
                            Layout[Layout.Socialbar]);
        return model;
    }

    setNavbar(){
        this.layoutOptionsModel = new LayoutOptionsModel(
            Layout[Layout.Navbar],"","","");
    }

    
    setHeader(){
        this.layoutOptionsModel = new LayoutOptionsModel("",
            Layout[Layout.Header],"","");
    }

    
    setFooter(){
        this.layoutOptionsModel = new LayoutOptionsModel("","",
            Layout[Layout.Footer],"");
    }

    
    setSocialbar(){
        this.layoutOptionsModel = new LayoutOptionsModel("","","",
            Layout[Layout.Socialbar]);
    }

    buildLayout():LayoutOptionsModel{
        return this.layoutOptionsModel;
    }
}
export class LayoutOptionsModel{
    Navbar:string | undefined;
    Header:string | undefined;
    Footer:string | undefined;
    Socialbar:string | undefined
    
    
    constructor(navbar:string="",header:string="",footer:string="",socialbar:string="") {
        this.Navbar=navbar ;
        this.Header=header;
        this.Footer=footer;
        this.Socialbar=socialbar;
    }
}