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
  <!-- 修改燈箱 -->
  <Lightbox
    ref="lightbox" :lightboxType="true" @toSaveData="updateProduct(lightboxdata[0].product_no)">
    <div class="product_lightbox">
      <!-- --------------------------------- -->

      <div class="product-row-group">
        <p class="product-title-bar">商品圖片</p>
        <!-- 將圖片上傳區域 -->
        <div class="product-pic-zone">
          <div class="product-pic-group">
            <div class="big-pic">
              <label for="picupload" class="limitpic"
                ><img :src="getproductpic(currentPic1)" alt=""
              /></label>
            </div>

            <div class="s-group">
              <div class="small-pic">
                <label for="picupload" class="limitpic"
                  ><img :src="getproductpic(currentPic1)" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload" class="limitpic"
                  ><img :src="getproductpic(currentPic2)" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload" class="limitpic"
                  ><img :src="getproductpic(currentPic3)" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload" class="limitpic"
                  ><img :src="getproductpic(currentPic4)" alt=""
                /></label>
              </div>
            </div>
          </div>
          <div class="pic-up">
            <div class="product-row">
              <strong>上傳圖片1</strong>
              <span><label for="picupload">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload"
                @change="uploadfile"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片2</strong>
              <span><label for="picupload">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload"
                @change="uploadfile"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片3</strong>
              <span><label for="picupload">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload"
                @change="uploadfile"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片4</strong>
              <span><label for="picupload">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload"
                @change="uploadfile"
              />
            </div>
          </div>
        </div>
        <p class="product-title-bar">商品屬性</p>
        <div class="product-row">
          <strong>商品名稱:</strong>
          <input
            class="form-control"
            type="text"
            v-model="name"
            id="name"
            placeholder="請輸入名稱"
          />
        </div>
        <div class="product-row">
          <strong>商品類別:</strong>
          <input
            class="form-control"
            type="text"
            v-model="type"
            id="type"
            placeholder="請輸入類別"
          />
        </div>
        <div class="product-row">
          <strong>商品售價:</strong>
          <input
            class="form-control"
            type="text"
            v-model="price"
            id="price"
            placeholder="請輸入售價"
          />
        </div>
        <!-- <div class="product-row">
          <strong>商品數量:</strong>
          <input class="form-control" type="text" placeholder="請輸入數量" />
        </div> -->
        <hr />
        <div class="product-row">
          <strong>狀態:</strong>
          <select class="form-select" v-model="status">
            <option selected></option>
            <option value="A">上架</option>
            <option value="IA">下架</option>
          </select>
        </div>
        <hr />
        <div class="product-row" style="align-items: start">
          <strong>商品資訊:</strong>
          <textarea
            class="form-control"
            v-model="info"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="請輸入商品資訊"
            style="height: 400px"
          ></textarea>
        </div>
        <hr />
        <div class="product-row" style="align-items: start">
          <strong>商品介紹:</strong>
          <textarea
            class="form-control"
            v-model="intro"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="請輸入規格說明"
            style="height: 400px"
          ></textarea>
        </div>
        <div class="product-row" style="align-items: start">
          <strong>介紹圖片:</strong>
        </div>
        <div class="big-pic">
            <label for="picupload" class="limitpic"
                  ><img :src="getproductpic(currentPic5)" alt=""
                /></label>
        </div>
        <div class="product-row">
              <strong>上傳圖片5</strong>
              <span><label for="picupload">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload"
                @change="uploadfile"
              />
            </div>
        <div style="height: 20px"></div>
        <div class="big-pic">
            <label for="picupload" class="limitpic"
                  ><img :src="getproductpic(currentPic6)" alt=""
                /></label>
        </div>
        <div class="product-row">
              <strong>上傳圖片6</strong>
              <span><label for="picupload">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload"
                @change="uploadfile"
              />
            </div>

        <hr />
        <div class="product-row" style="align-items: start">
          <strong>規格圖片:</strong>
        </div>
        <div class="pro-pic-info">
            <div class="big-pic">
            <label for="picupload" class="limitpic"
                  ><img :src="getproductpic(currentPic7)" alt=""
                /></label>
        </div>
        <div class="product-row">
              <strong>上傳圖片7</strong>
              <span><label for="picupload">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload"
                @change="uploadfile"
              />
            </div>
        </div>
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
      uploadfile: null,
      name: "",
      type: "",
      price: "",
      status: "",
      info: "",
      intro: "",
      currentPic1: "",
      currentPic2: "",
      currentPic3: "",
      currentPic4: "",
      currentPic5: "",
      currentPic6: "",
      currentPic7: "",
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
    // showLightbox(product_no) {
    //   this.$refs.lightbox.showLightbox = true;
    //   // console.log(this.productdata);
    //   this.lightboxdata = this.productsdata.find(
    //     (item) => item.product_no === product_no
    //   );
    //   document.body.style.overflow = "hidden";
    // },
    showLightbox(product_no) {
      this.lightboxdata = [];
      this.status = "";
    //   console.log(product_no);
      var formData = new FormData();
      formData.append("product_no", product_no);
      axios
        .post(
          `${import.meta.env.VITE_PHP_URL}` + "/productDataGetEach.php",
          formData
        )
        .then((res) => {
          // console.log(res);
          this.lightboxdata = res.data.products;
          // console.log(this.lightboxdata);
          this.name = this.lightboxdata[0].product_name;
          this.type = this.lightboxdata[0].product_class;
          this.price = this.lightboxdata[0].price;
          this.status = this.lightboxdata[0].status;
          this.info = this.lightboxdata[0].info;
          this.intro = this.lightboxdata[0].product_intro;
          this.currentPic1 = this.lightboxdata[0].product_pic1;
          this.currentPic2 = this.lightboxdata[0].product_pic2;
          this.currentPic3 = this.lightboxdata[0].product_pic3;
          this.currentPic4 = this.lightboxdata[0].product_pic4;
          this.currentPic5 = this.lightboxdata[0].product_intro_pic1;
          this.currentPic6 = this.lightboxdata[0].product_intro_pic2;
          this.currentPic7 = this.lightboxdata[0].product_size_pic1;

          this.$refs.lightbox.showLightbox = true;
          document.body.style.overflow = "hidden";
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },

    getPicUrl(filename) {
      return `${import.meta.env.VITE_IMG_URL}` + "/product/" + filename;
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
    uploadfile(e) {
      this.uploadFile = e.target.files[0];
      console.log(this.uploadFile["name"].substr(-3));
      if (this.uploadFile["name"].substr(-3) == "png") {
        this.currentPic = URL.createObjectURL(this.uploadFile);
        const reader = new FileReader();
        reader.readAsDataURL(this.uploadFile);
      } else {
        picupload.value = null;
        alert("圖檔只接受PNG檔");
      }
    },
  },
};
</script>

<style></style>
