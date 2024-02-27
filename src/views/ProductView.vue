<template>
  <MainHeader />
  <Dropdown />
  <div class="product">
    <div class="product_container">
      <!-- 搜尋 -->
      <div class="product-btn">
        <SearchBtn :placeholder="placeholder" 
        @toSearchData="searchdata"/>
        <addBtn @click="showLightbox(2, 0)" />
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
              <td class="product_name">{{ item.product_name.substring(0, 17) }}</td>
              <td class="product_class">{{ item.product_class.substring(0, 2) }}</td>
              <td class="product_price">{{ item.price }}</td>
              <td>
                <SwitchBtn />
              </td>
              <td class="product_operate">
                <button @click="showLightbox(1, item.product_no)">
                  <img src="/public/images/icon/icon_revise.png" alt="" />修改
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 新增燈箱 -->
  <Lightbox
    ref="lightbox2"
    :lightboxType="true"
    @toSaveData="insertProduct(lightboxdata[0].product_no)"
  >
    <div class="product_lightbox">
      <!-- --------------------------------- -->

      <div class="product-row-group">
        <p class="product-title-bar">商品圖片</p>
        <div class="product-pic-zone">
          <div class="product-pic-group">
            <div class="big-pic">
              <label for="picupload01" class="limitpic"
                ><img :src="currentPic1" alt=""
              /></label>
            </div>

            <div class="s-group">
              <div class="small-pic">
                <label for="picupload01" class="limitpic"
                  ><img :src="currentPic1" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload02" class="limitpic"
                  ><img :src="currentPic2" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload03" class="limitpic"
                  ><img :src="currentPic3" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload04" class="limitpic"
                  ><img :src="currentPic4" alt=""
                /></label>
              </div>
            </div>
          </div>
          <div class="pic-up">
            <div class="product-row">
              <strong>上傳圖片1</strong>
              <span><label for="picupload01">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload01"
                @change="uploadfile('currentPic1')"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片2</strong>
              <span><label for="picupload02">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload02"
                @change="uploadfile('currentPic2')"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片3</strong>
              <span><label for="picupload03">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload03"
                @change="uploadfile('currentPic3')"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片4</strong>
              <span><label for="picupload04">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload04"
                @change="uploadfile('currentPic4')"
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
          <select class="form-select" id="type" v-model="type">
            <option value="1">服飾</option>
            <option value="2">杯子</option>
            <option value="3">帽子</option>
            <option value="4">保溫杯</option>
          </select>
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
        <hr />
        <div class="product-row">
          <strong>狀態:</strong>
          <select class="form-select" v-model="status" id="status">
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
            id="info"
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
            id="intro"
            rows="8"
            placeholder="請輸入規格說明"
            style="height: 400px"
          ></textarea>
        </div>
        <div class="product-row" style="align-items: start">
          <strong>介紹圖片:</strong>
        </div>
        <div class="big-pic">
          <label for="picupload05" class="limitpic"
            ><img :src="currentPic5" alt=""
          /></label>
        </div>
        <div class="product-row">
          <strong>上傳圖片5</strong>
          <span><label for="picupload05">(點擊我換圖)</label></span>
          <input
            class="form-control"
            style="display: none"
            type="file"
            id="picupload05"
            @change="uploadfile('currentPic5')"
          />
        </div>
        <div style="height: 20px"></div>
        <div class="big-pic">
          <label for="picupload06" class="limitpic"
            ><img :src="currentPic6" alt=""
          /></label>
        </div>
        <div class="product-row">
          <strong>上傳圖片6</strong>
          <span><label for="picupload06">(點擊我換圖)</label></span>
          <input
            class="form-control"
            style="display: none"
            type="file"
            id="picupload06"
            @change="uploadfile('currentPic6')"
          />
        </div>
        <hr />
        <div class="product-row" style="align-items: start">
          <strong>規格圖片:</strong>
        </div>
        <div class="pro-pic-info">
          <div class="big-pic">
            <label for="picupload07" class="limitpic"
              ><img :src="currentPic7" alt=""
            /></label>
          </div>
          <div class="product-row">
            <strong>上傳圖片7</strong>
            <span><label for="picupload07">(點擊我換圖)</label></span>
            <input
              class="form-control"
              style="display: none"
              type="file"
              id="picupload07"
              @change="uploadfile('currentPic7')"
            />
          </div>
        </div>
      </div>
    </div>
  </Lightbox>

  <!-- 修改燈箱 -->
  <Lightbox
    ref="lightbox1"
    :lightboxType="true"
    @toSaveData="updateProduct(lightboxdata[0].product_no)"
  >
    <div class="product_lightbox">
      <!-- --------------------------------- -->

      <div class="product-row-group">
        <p class="product-title-bar">商品圖片</p>
        <div class="product-pic-zone">
          <div class="product-pic-group">
            <div class="big-pic">
              <label for="picupload01" class="limitpic"
                ><img :src="currentPic1" alt=""
              /></label>
            </div>

            <div class="s-group">
              <div class="small-pic">
                <label for="picupload01" class="limitpic"
                  ><img :src="currentPic1" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload02" class="limitpic"
                  ><img :src="currentPic2" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload03" class="limitpic"
                  ><img :src="currentPic3" alt=""
                /></label>
              </div>
              <div class="small-pic">
                <label for="picupload04" class="limitpic"
                  ><img :src="currentPic4" alt=""
                /></label>
              </div>
            </div>
          </div>
          <div class="pic-up">
            <div class="product-row">
              <strong>上傳圖片1</strong>
              <span><label for="picupload01">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload01"
                @change="uploadfile('currentPic1')"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片2</strong>
              <span><label for="picupload02">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload02"
                @change="uploadfile('currentPic2')"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片3</strong>
              <span><label for="picupload03">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload03"
                @change="uploadfile('currentPic3')"
              />
            </div>
            <div class="product-row">
              <strong>上傳圖片4</strong>
              <span><label for="picupload04">(點擊我換圖)</label></span>
              <input
                class="form-control"
                style="display: none"
                type="file"
                id="picupload04"
                @change="uploadfile('currentPic4')"
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
          <select class="form-select" id="type" v-model="type">
            <option value="1">服飾</option>
            <option value="2">杯子</option>
            <option value="3">帽子</option>
            <option value="4">保溫杯</option>
          </select>
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
        <hr />
        <div class="product-row">
          <strong>狀態:</strong>
          <select class="form-select" v-model="status" id="status">
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
            id="info"
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
            id="intro"
            rows="8"
            placeholder="請輸入規格說明"
            style="height: 400px"
          ></textarea>
        </div>
        <div class="product-row" style="align-items: start">
          <strong>介紹圖片:</strong>
        </div>
        <div class="big-pic">
          <label for="picupload05" class="limitpic"
            ><img :src="currentPic5" alt=""
          /></label>
        </div>
        <div class="product-row">
          <strong>上傳圖片5</strong>
          <span><label for="picupload05">(點擊我換圖)</label></span>
          <input
            class="form-control"
            style="display: none"
            type="file"
            id="picupload05"
            @change="uploadfile('currentPic5')"
          />
        </div>
        <div style="height: 20px"></div>
        <div class="big-pic">
          <label for="picupload06" class="limitpic"
            ><img :src="currentPic6" alt=""
          /></label>
        </div>
        <div class="product-row">
          <strong>上傳圖片6</strong>
          <span><label for="picupload06">(點擊我換圖)</label></span>
          <input
            class="form-control"
            style="display: none"
            type="file"
            id="picupload06"
            @change="uploadfile('currentPic6')"
          />
        </div>
        <hr />
        <div class="product-row" style="align-items: start">
          <strong>規格圖片:</strong>
        </div>
        <div class="pro-pic-info">
          <div class="big-pic">
            <label for="picupload07" class="limitpic"
              ><img :src="currentPic7" alt=""
            /></label>
          </div>
          <div class="product-row">
            <strong>上傳圖片7</strong>
            <span><label for="picupload07">(點擊我換圖)</label></span>
            <input
              class="form-control"
              style="display: none"
              type="file"
              id="picupload07"
              @change="uploadfile('currentPic7')"
            />
          </div>
        </div>
      </div>
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
      placeholder: "請輸入商品編號、名稱或類別",
      productsdata: [],
      findproductsdata: [],
      lightboxdata: [],
      lightbox_num: 0,
      uploadFile: null,
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
    searchdata(value) {
            this.findproductsdata = this.productsdata.filter((item) => {
                return item.product_no.toString().includes(value) || item.product_name.substring(0, 17).toString().includes(value) || item.product_class.substring(0, 2).toString().includes(value);
            })
        },
    getproductpic(src) {
      return `${import.meta.env.VITE_IMG_URL}/product/product_data/` + src;
    },
    // showLightbox(product_no) {
    //   this.$refs.lightbox.showLightbox = true;
    //   // console.log(this.productdata);
    //   this.lightboxdata = this.productsdata.find(
    //     (item) => item.product_no === product_no
    //   );
    //   document.body.style.overflow = "hidden";
    // },
    showLightbox(id, product_no) {
      if (id == 2) {
        this.type = 1;
        this.status = '上架';
        this.$refs[`lightbox${id}`].showLightbox = true;
        this.currentPic1 = this.getPicUrl('errorpic.png')
        this.currentPic2 = this.getPicUrl('errorpic.png')
        this.currentPic3 = this.getPicUrl('errorpic.png')
        this.currentPic4 = this.getPicUrl('errorpic.png')
        this.currentPic5 = this.getPicUrl('errorpic.png')
        this.currentPic6 = this.getPicUrl('errorpic.png')
        this.currentPic7 = this.getPicUrl('errorpic.png')
      } else {
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
          // this.type = this.lightboxdata[0].product_class;
          if (this.lightboxdata[0].product_class == "服飾") {
            this.type = 1;
          } else if (this.lightboxdata[0].product_class == "杯子") {
            this.type = 2;
          } else if (this.lightboxdata[0].product_class == "帽子") {
            this.type = 3;
          } else if (this.lightboxdata[0].product_class == "保溫杯") {
            this.type = 4;
          }
          // console.log(this.type);
          this.price = this.lightboxdata[0].price;
          this.status = this.lightboxdata[0].status;
          this.info = this.lightboxdata[0].info;
          this.intro = this.lightboxdata[0].product_intro;
          this.currentPic1 = this.getPicUrl(this.lightboxdata[0].product_pic1);
          this.currentPic2 = this.getPicUrl(this.lightboxdata[0].product_pic2);
          this.currentPic3 = this.getPicUrl(this.lightboxdata[0].product_pic3);
          this.currentPic4 = this.getPicUrl(this.lightboxdata[0].product_pic4);
          this.currentPic5 = this.getPicUrl(
            this.lightboxdata[0].product_intro_pic1
          );
          this.currentPic6 = this.getPicUrl(
            this.lightboxdata[0].product_intro_pic2
          );
          this.currentPic7 = this.getPicUrl(
            this.lightboxdata[0].product_size_pic1
          );

          this.$refs[`lightbox${id}`].showLightbox = true;
          document.body.style.overflow = "hidden";
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      }
    },

    insertProduct() {
      if (
        document.getElementById("name").value.trim() != "" &&
        document.getElementById("type").value.trim() != "" &&
        document.getElementById("price").value.trim() != "" &&
        // document.getElementById("status").value.trim() != "" &&
        document.getElementById("info").value.trim() != "" &&
        document.getElementById("intro").value.trim() != ""
      ) {
        if (this.uploadFile != null) {
          let picFormData = new FormData();
          picFormData.append("product_pic1", this.currentPic1);
          picFormData.append("product_pic2", this.currentPic2);
          picFormData.append("product_pic3", this.currentPic3);
          picFormData.append("product_pic4", this.currentPic4);
          picFormData.append("product_intro_pic1", this.currentPic5);
          picFormData.append("product_intro_pic2", this.currentPic6);
          picFormData.append("product_size_pic1", this.currentPic7);
          picFormData.append("product_no", product_no);
        }
        let formData = new FormData();
        formData.append("product_no", product_no);
        formData.append("name", document.getElementById("name").value);
        formData.append("type", document.getElementById("type").value);
        // console.log(document.getElementById("type").value);
        // console.log(document.getElementById("price").value);
        formData.append("price", document.getElementById("price").value);
        formData.append("status", this.status);
        formData.append("info", document.getElementById("info").value);
        formData.append("intro", document.getElementById("intro").value);
        axios({
          method: "post",
          url: `${import.meta.env.VITE_PHP_URL}` + "/insertProduct.php",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((res) => {
            if (!res.error) {
              // console.log(res);
              this.updateJourney(res.data.PK)
              this.$refs.lightbox2.showLightbox = false
            }
          })

          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        alert("資料不可為空");
      }
        
    },

    getPicUrl(filename) {
      return (
        `${import.meta.env.VITE_IMG_URL}` +
        "/product/product_data/" +
        filename +
        `?${Date.now()}`
      );
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
    // uploadfile(e) {
    //   this.uploadFile = e.target.files[0];
    //   console.log(this.uploadFile["name"].substr(-3));
    //   if (this.uploadFile["name"].substr(-3) == "png") {
    //     this.currentPic = URL.createObjectURL(this.uploadFile);
    //     const reader = new FileReader();
    //     reader.readAsDataURL(this.uploadFile);
    //   } else {
    //     picupload.value = null;
    //     alert("圖檔只接受PNG檔");
    //   }
    // },

    uploadfile(pic) {
      this.uploadFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this[pic] = fileReader.result;
      };
      fileReader.readAsDataURL(this.uploadFile);
    },

    updateProduct(product_no) {
      if (
        document.getElementById("name").value.trim() != "" &&
        document.getElementById("type").value.trim() != "" &&
        document.getElementById("price").value.trim() != "" &&
        // document.getElementById("status").value.trim() != "" &&
        document.getElementById("info").value.trim() != "" &&
        document.getElementById("intro").value.trim() != ""
      ) {
        if (this.uploadFile != null) {
          let picFormData = new FormData();
          picFormData.append("product_pic1", this.currentPic1);
          picFormData.append("product_pic2", this.currentPic2);
          picFormData.append("product_pic3", this.currentPic3);
          picFormData.append("product_pic4", this.currentPic4);
          picFormData.append("product_intro_pic1", this.currentPic5);
          picFormData.append("product_intro_pic2", this.currentPic6);
          picFormData.append("product_size_pic1", this.currentPic7);
          picFormData.append("product_no", product_no);
          axios({
            method: "post",
            url: `${import.meta.env.VITE_PHP_URL}` + "/updateProductPic.php",
            data: picFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then((res) => {
              if (!res.data.error) {
                // console.log(res.data.msg);
                // alert(res.data.msg)
                // this.$refs.lightbox.showLightbox = false
                this.uploadFile = null;
                this.editNumber +=1
                this.getData();
              }
            })

            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        }
        let formData = new FormData();
        formData.append("product_no", product_no);
        formData.append("name", document.getElementById("name").value);
        formData.append("type", document.getElementById("type").value);
        // console.log(document.getElementById("type").value);
        // console.log(document.getElementById("price").value);
        formData.append("price", document.getElementById("price").value);
        formData.append("status", this.status);
        formData.append("info", document.getElementById("info").value);
        formData.append("intro", document.getElementById("intro").value);
        axios({
          method: "post",
          url: `${import.meta.env.VITE_PHP_URL}` + "/updateProduct.php",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((res) => {
            if (!res.error) {
              // console.log(res);
              alert(res.data.msg);
              this.$refs.lightbox1.showLightbox = false
              this.getData();
            }
          })

          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        alert("資料不可為空");
      }
    },
  },
};
</script>

<style></style>
