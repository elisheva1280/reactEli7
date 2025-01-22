// import React { Component } from "react";


import { useTranslation } from "react-i18next";
import i18nChangeL from '../../les5/components/i18nChangeL';

// import React, { useState, useEffect  } from 'react';

    function  MyHome(){
        const{t}=useTranslation();

    return (
        <>
        <h1>{t("home")}</h1>

        
        </>
    );
}export default MyHome;