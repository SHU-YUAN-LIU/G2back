<template>
  <MainHeader />
  <div class="mem-bg">
    <div class="mem_wrap-group">
      <div class="mem_wrap">
        <!-- 搜尋 -->

        <!-- ----------------------------------------------------- -->
        <div class="mem-info">
          <table class="table">
            <thead>
              <tr class="table-dark " align="center ">
                <th scope="col" class="p-3">會員ID</th>
                <th scope="col" class="p-2"><span class="l-2">姓名</span></th>
                <th scope="col" class="p-2">連絡電話</th>
                <th scope="col" class="p-2">是否停權</th>
                <th scope="col" class="p-2">操作</th>
              </tr>
            </thead>
            <tbody>
              <!-- 第一行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第二行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第三行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第四行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第五行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第六行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第七行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import switch_btn from '../components/switch_btn.vue'
export default {
  components: {
    MainHeader,
    switch_btn,

  },
  data() {
    return {

    }
  },

}
</script>

<style></style>
