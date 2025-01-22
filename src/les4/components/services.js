import React, { Component } from "react";


import { useTranslation } from "react-i18next";




 
    function  Services(){
        const{t}=useTranslation();
    return (
        <>
        <h1>{t("services")}</h1>
        
        </>
    );
}export default Services;