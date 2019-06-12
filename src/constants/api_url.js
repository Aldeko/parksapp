

//One article
const articleId= "345124"
export const api_rest="&getRelatedArticles=true&getFields=articleId,titol,localitzacio,municipis,imatge_principal,imatge_galeria,entradeta,detail_url,codi_geoportal,street_view,bloc_auxiliars,related_articles"
export const url_base_park="api/equipaments?";
export const api_park=`${url_base_park}articleId=${articleId}${api_rest}`;

//List of articles
const api_rest2="rows=15&subambit=Parcs&getFields=articleId,imatge_principal,localitzacio,municipis,titol,undefined&sort=titol,asc";
export const api_park_list=`${url_base_park}${api_rest2}`;

