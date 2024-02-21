<template>
  <MainHeader />
  <Dropdown />
  <div class="product">
    <div class="product_container">
      <div class="product-btn">
        <SearchBtn :placeholder="placeholder" />
        <addBtn />
      </div>
      <div class="product_table">
        <table class="table table-hover" style="position: relative">
          <thead>
            <td>商品編號</td>
            <td>商品圖片</td>
            <td>商品名稱</td>
            <td>類別</td>
            <td>售價</td>
            <td>是否上架</td>
            <td>操作</td>
          </thead>
          <tbody>
            <tr v-for="item in findproductsdata" valign="middle" align="center">
              <td class="product_no">{{ item.product_no }}</td>
              <td>
                <img
                  class="img-fluid"
                  style="max-width: 80px"
                  :src="getproductpic(item.product_pic1)"
                />
              </td>
              <td class="product_name">{{ item.product_name }}</td>
              <td class="product_class">{{ item.product_class }}</td>
              <td class="product_price">{{ item.price }}</td>
              <td>
                <SwitchBtn />
              </td>
              <td class="product_operate">
                <button @click="showLightbox(item.product_no)">
                  <img src="/public/images/icon/icon_revise.png" alt="" />修改
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- 燈箱架構 -->
  <Lightbox ref="lightbox" lightboxType="true">
    <div class="product_lightbox">
      <!-- --------------------------------- -->
      

      <div class="product-row-group">
        <p class="product-title-bar">商品圖片</p>
        <!-- 將圖片上傳區域 -->
        <div class="product-pic-zone">
          <div class="product-pic-group">
            <div class="big-pic">上傳圖片</div>
    
            <div class="s-group">
              <div class="small-pic">上傳</div>
              <div class="small-pic">上傳</div>
              <div class="small-pic">上傳</div>
              <div class="small-pic">上傳</div>
            </div>
          </div>
          <div class="pic-up">
              <div class="product-row">
                <strong>上傳圖片1:</strong>
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
              <div class="product-row">
                <strong>上傳圖片2:</strong>
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
              <div class="product-row">
                <strong>上傳圖片3:</strong>
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
              <div class="product-row">
                <strong>上傳圖片4:</strong>
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
          </div>
      </div>
      <p class="product-title-bar">商品屬性</p>
        <div class="product-row">
          <strong>商品名稱:</strong>
          <input class="form-control" type="text" placeholder="請輸入名稱" />
        </div>
        <div class="product-row">
          <strong>商品類別:</strong>
          <input class="form-control" type="text" placeholder="請輸入類別" />
        </div>
        <div class="product-row">
          <strong>商品售價:</strong>
          <input class="form-control" type="text" placeholder="請輸入售價" />
        </div>
        <div class="product-row">
          <strong>商品數量:</strong>
          <input class="form-control" type="text" placeholder="請輸入數量" />
        </div>
        <hr />
        <div class="product-row">
          <strong>狀態:</strong>
          <select class="form-select">
            <option selected></option>
            <option value="A">上架</option>
            <option value="IA">下架</option>
          </select>
        </div>
        <!-- <hr /> -->
        <!-- <div class="product-row">
          <strong>上傳圖片:</strong>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div> -->
      </div>
      <!-- ------------------------- -->
    </div>
  </Lightbox>
</template>

<script>
import axios from "axios";
import MainHeader from "../components/MainHeader.vue";
import Lightbox from "../components/Lightbox.vue";
import SwitchBtn from "../components/switch_btn.vue";
import SearchBtn from "../components/SearchBtn.vue";
import Dropdown from "../components/Dropdown.vue";
import addBtn from "../components/addBtn.vue";
export default {
  data() {
    return {
      placeholder: "請輸入關鍵字",
      productsdata: [],
      findproductsdata: [],
      lightboxdata: [],
      lightbox_num: 0,
    };
  },
  components: {
    MainHeader,
    Lightbox,
    SwitchBtn,
    SearchBtn,
    Dropdown,
    addBtn,
  },
  created() {
    this.getData();
  },
  mounted() {
    document.title = "青年進補黨(後台) - 商品管理";
  },
  methods: {
    getproductpic(src) {
      return (
        `${import.meta.env.VITE_RESOURCE_URL}images/product/product_data/` + src
      );
    },
    showLightbox(product_no) {
      this.$refs.lightbox.showLightbox = true;
      // console.log(this.productdata);
      document.body.style.overflow = "hidden";
    },
    getData() {
      axios
        .get(`${import.meta.env.VITE_PHP_URL}` + "/productDataGetAll.php")
        .then((res) => {
          this.productsdata = res.data.products;
          this.findproductsdata = res.data.products;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>

<style></style>
