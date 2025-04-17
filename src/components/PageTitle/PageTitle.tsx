import "./PageTitle.scss";

interface IPageTitleProps {
  title: string;
}

const PageTitle = ({ title }: IPageTitleProps) => {
  return <div className="page-title">{title}</div>;
};

export default PageTitle;
