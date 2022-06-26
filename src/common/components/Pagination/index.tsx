import { IoAlertCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  ArrowsContainer,
  Button,
  ButtonsContainer,
  Container,
  DisclaimerContainer,
  NoItemsContainer,
} from "./style";

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  currentPage: number;
  loadPage: (v: number) => void;
  customColor?: string;
}

export const Pagination = ({
  totalItems,
  itemsPerPage = 10,
  currentPage,
  loadPage,
  customColor,
}: PaginationProps) => {
  return (
    <Container>
      {totalItems === 0 ? (
        <NoItemsContainer customColor={customColor}>
          <IoAlertCircleOutline />
          <p>Sem itens para mostrar</p>
        </NoItemsContainer>
      ) : (
        <>
          <ButtonsContainer>
            <ArrowsContainer>
              <Button
                arrow
                onClick={() => loadPage(currentPage - 1)}
                customColor={customColor}
              >
                <IoIosArrowBack />
              </Button>
            </ArrowsContainer>

            {currentPage > 3 && (
              <>
                <Button onClick={() => loadPage(1)} customColor={customColor}>
                  1
                </Button>
                <Button decorative>...</Button>
              </>
            )}

            {currentPage > 2 && (
              <Button
                onClick={() => loadPage(currentPage - 2)}
                customColor={customColor}
              >
                {currentPage - 2}
              </Button>
            )}

            {currentPage > 1 && (
              <Button
                onClick={() => loadPage(currentPage - 1)}
                customColor={customColor}
              >
                {currentPage - 1}
              </Button>
            )}

            <Button customColor={customColor} active>
              {currentPage}
            </Button>

            {currentPage < Math.ceil(totalItems / itemsPerPage) && (
              <Button
                onClick={() => loadPage(currentPage + 1)}
                customColor={customColor}
              >
                {currentPage + 1}
              </Button>
            )}

            {currentPage + 1 < Math.ceil(totalItems / itemsPerPage) && (
              <Button
                onClick={() => loadPage(currentPage + 2)}
                customColor={customColor}
              >
                {currentPage + 2}
              </Button>
            )}

            {currentPage + 3 < Math.ceil(totalItems / itemsPerPage) && (
              <>
                <Button decorative>...</Button>
                <Button
                  onClick={() => loadPage(Math.ceil(totalItems / itemsPerPage))}
                  customColor={customColor}
                >
                  {Math.ceil(totalItems / itemsPerPage)}
                </Button>
              </>
            )}

            <ArrowsContainer>
              <Button
                arrow
                onClick={() => loadPage(currentPage + 1)}
                customColor={customColor}
              >
                <IoIosArrowForward />
              </Button>
            </ArrowsContainer>
          </ButtonsContainer>

          <DisclaimerContainer customColor={customColor}>
            {"Mostrando itens".concat(
              " ",
              "de",
              " ",
              (currentPage * itemsPerPage - itemsPerPage + 1).toString(),
              " ",
              "até",
              " ",
              (currentPage === Math.ceil(totalItems / itemsPerPage)
                ? totalItems
                : currentPage * itemsPerPage
              ).toString(),
              " ",
              "de um total de",
              " ",
              totalItems.toString()
            )}
          </DisclaimerContainer>
        </>
      )}
    </Container>
  );
};
