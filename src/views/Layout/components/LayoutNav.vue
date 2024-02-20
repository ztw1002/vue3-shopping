<script setup>
import router from "@/router";
import { useUserStore } from "@/stores/userStore";
import { useCartStore } from "@/apis/cartStore";


const userStore = useUserStore();
const cartStore = useCartStore()

const confirm = () => {
  userStore.clearUserInfo()
  cartStore.clearCart()
  router.push('/login')
}

// //form实例统一校验
// const formRef = ref(null);
// const router = useRouter();
// const doLogin = () => {
//   formRef.value.validate(async (valid) => {
//     // valid: 所有表单都通过校验  才为true
//     //console.log(valid)
//     if (valid) {
//       //console.log(form.value)
//       const { account, password } = form.value
//       //const res = await loginAPI({account, password});
//       const res = await userStore.getUserInfo({ account, password });
//       //console.log(res)
//       ElMessage({ type: 'success', message: '登录成功' })
//       router.replace({ path: '/' })
//     }
//   })
// }
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</a></li>
          <li>
            <el-popconfirm title="确认退出吗?" @confirm="confirm" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>