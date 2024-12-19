import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  locale: string;
  updateLocale: (locale: string) => Promise<boolean> | undefined;
};

const LanguageContext = React.createContext<LanguageContextType>({
  locale: "el-GR",
  updateLocale: (_locale: any) => undefined,
});

export const LanguageContextProvider = (props: any) => {
  const [locale, setLocale] = useState(
    localStorage.getItem("language") ?? "el-GR"
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    var language = localStorage.getItem("language") ?? "el-GR";
    setLocale(language);
    i18n.changeLanguage(language);
  }, []);

  const updateLocale = async (id: string) => {
    localStorage.setItem("language", id);
    setLocale(id);
    i18n.changeLanguage(id);
    return true;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        updateLocale,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

export const useLocale = () => {
  return useContext(LanguageContext);
};
