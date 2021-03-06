
/**
 * Page object for edit product page.
 * @constructor
 */
var EditProductPage = function(){

    this.url = "product-edit";


    this.productName = $('[formcontrolname=prod_name]');
    this.productDescription = $('[formcontrolname=prod_desc]');
    this.productPrice = $('[formcontrolname=prod_price]');

    /**
     * Save product button
     */
    this.saveProductButton = $('[type="submit"]');

};
module.exports = new EditProductPage();