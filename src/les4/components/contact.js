// import React, { Component } from "react";

// import './i18n';

import { useTranslation } from "react-i18next";
import i18nChangeL from '../../les5/components/i18nChangeL';



    function  Contact(){
        const{t}=useTranslation(); 
    return (
        <>
        <h1>{t("contact")}</h1>
        
        </>
    );
}export default Contact;