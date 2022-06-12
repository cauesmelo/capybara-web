import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authState } from "../../../../recoil/atoms";
import { useRecoilValue } from "recoil";
import {
  ArrowIconWrapper,
  MenuItemChild,
  MenuItemChildless,
  MenuItemChildsContainer,
  MenuItemContainer,
  MenuItemHeader,
  MenuItemWrapper,
  Wrapper,
} from "./style";

export const NavigationMenu = () => {
  const auth = useRecoilValue(authState);
  const history = useHistory();

  const handleOpenPage = (url: string) => {
    // setExpandMenu(false);
    history.push(url);
  };

  return (
    <Wrapper>
      {/* <MenuItemChildless onClick={() => handleOpenPage("/meus-projetos")}>
        {dictionary[language].meusProjetos}
      </MenuItemChildless>

      <MenuItemChildless onClick={() => handleOpenPage("/faq")}>
        {dictionary[language].faq}
      </MenuItemChildless>

      {role === "Admin" && (
        <MenuItemContainer>
          <MenuItemWrapper
            onMouseEnter={() => setExpandMenu(true)}
            onMouseLeave={() => setExpandMenu(false)}
            expand={expandMenu}
          >
            <MenuItemHeader>
              {dictionary[language].administracao}
              <ArrowIconWrapper flip={expandMenu}>
                <ArrowCutIcon />
              </ArrowIconWrapper>
            </MenuItemHeader>
            <MenuItemChildsContainer>
              <MenuItemChild
                onClick={() => handleOpenPage("/admin-questionario")}
              >
                {dictionary[language].questionario}
              </MenuItemChild>

              <MenuItemChild onClick={() => handleOpenPage("/admin-entregas")}>
                {dictionary[language].entregasAssuntosDisciplinas}
              </MenuItemChild>

              <MenuItemChild onClick={() => handleOpenPage("/admin-geral")}>
                {dictionary[language].geral}
              </MenuItemChild>

              <MenuItemChild onClick={() => handleOpenPage("/admin-faq")}>
                {dictionary[language].faq}
              </MenuItemChild>

              <MenuItemChild onClick={() => handleOpenPage("/admin-pesos")}>
                {dictionary[language].pesos}
              </MenuItemChild>

              <MenuItemChild onClick={() => handleOpenPage("/admin-feedback")}>
                {dictionary[language].feedbacks}
              </MenuItemChild>

              <MenuItemChild onClick={() => handleOpenPage("/admin-regras")}>
                {dictionary[language].regras}
              </MenuItemChild>
            </MenuItemChildsContainer>
          </MenuItemWrapper>
        </MenuItemContainer>
      )} */}
    </Wrapper>
  );
};
