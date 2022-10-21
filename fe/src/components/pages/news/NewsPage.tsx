import classes from "./NewsPage.module.scss";
import globalClasses from "../../../constants/GlobalStyle.module.scss";
import Header from "../../UI/molecules/header/OPHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../store/store";
import {
  addNews,
  deleteNews,
  getNews,
  updateNews,
} from "../../../store/actions/newsTypes";
import { Colors } from "../../../constants/Colors";
import { NewsModel } from "../../../models/NewsModel";
import OPCarditemList from "../../UI/organisms/cardItemList/OPCarditemList";
import { Pagination } from "@mui/material";
import OPDeleteModal from "../../UI/molecules/deleteModal/OPDeleteModal";
import NewsModal from "../../UI/molecules/newsModal/NewsModal";

const NewsPage = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(undefined);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [id, setId] = useState<number>();

  const news = useSelector((state: RootState) => state.news.news);

  const pagination = useSelector((state: RootState) => state.news.pagination);

  useEffect(() => {
    dispatch(getNews({}));
  }, []);

  const updateNewsHandler = (
    title: string,
    shortDescription: string,
    imageURL: string
  ) => {
    const newsDto: NewsModel = {
      title,
      shortDescription,
      imageURL,
      rawDescription: "Opis",
      description: "Opis",
    };
    dispatch(
      updateNews({
        ...newsDto,
        id: modalItem ? modalItem["id"] : 0,
      })
    );
    setModalShow(false);
    setModalItem(undefined);
  };

  const handleClickEdit = (item: any) => {
    setModalItem(item);
    setModalShow(true);
  };

  const addNewsHandler = (
    title: string,
    shortDescription: string,
    imageURL: string
  ) => {
    const newsDto: NewsModel = {
      title,
      shortDescription,
      imageURL,
      rawDescription: "Opis",
      description: "Opis",
    };

    dispatch(addNews(newsDto));
    setModalShow(false);
  };

  const changePageHandler = (
    event: React.ChangeEvent<unknown>,
    pageUpdated: number
  ) => {
    dispatch(getNews({ page: pageUpdated }));
  };

  const showDeleteModal = (id: number) => {
    setDeleteModalShow(true);
    setId(id);
  };

  const deleteHandler = () => {
    dispatch(deleteNews(id!));
    setDeleteModalShow(false);
    setModalShow(false);
    setModalItem(undefined);
  };

  return (
    <div className={globalClasses["page-wrapper"]}>
      <Header />
      <div className={globalClasses["content-wrapper"]}>
        <div className={globalClasses["content"]}>
          <p className={classes["paragraph"]}>
            <div className={globalClasses["add-wrapper"]}>
              <p className={globalClasses["add-text"]}>Dodaj vest</p>
              <button
                className={globalClasses["add-button"]}
                onClick={() => setModalShow(true)}
              >
                <span>+</span>Dodaj
              </button>
            </div>
            <OPCarditemList items={news} onClickEdit={handleClickEdit} />
            <Pagination
              count={pagination.totalPages}
              page={pagination.currentPage}
              onChange={changePageHandler}
            />
            <OPDeleteModal
              show={deleteModalShow}
              onDelete={deleteHandler}
              onHide={() => setDeleteModalShow(false)}
              type={"vest"}
            />
            <NewsModal
              show={modalShow}
              onClick={modalItem ? updateNewsHandler : addNewsHandler}
              onHide={() => {
                setModalShow(false);
                setModalItem(undefined);
              }}
              label={modalItem ? "SAČUVAJ IZMENE" : "DODAJ VEST"}
              item={modalItem}
              showDeleteModal={showDeleteModal}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
