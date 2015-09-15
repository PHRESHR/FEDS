const PageMetaFactory = () => {

  function getTitle(title) {
    return angular.isFunction(title) ? title() : title;
  }

  function getDescription(description) {
    return angular.isFunction(description) ? description() : description;
  }

  function getMetaImg(metaImg) {
    return angular.isFunction(metaImg) ? metaImg() : metaImg;
  }

  function getUrl(url) {
    return angular.isFunction(url) ? url() : url;
  }

  return { getTitle, getDescription, getMetaImg, getUrl };
};

export default PageMetaFactory;
