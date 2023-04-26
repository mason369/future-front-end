import { defineStore } from 'pinia';
import LoginService, { ILoginResponse, ILoginUserInput } from '@/api/login-register';
import { ElMessage } from 'element-plus';
import router from '@/router';
import { storage } from '@/utils/storage';
import UserService, { IGetCurrentUserResponse } from '@/api/user';

/**
 * 用于管理用户信息的 Pinia 存储。
 */
export const useUserLoginRegisterStore = defineStore('user', {
    state: () => ({
        // 用户信息
        user: {} as ILoginResponse,
        // 用户详细信息
        userInfo: {} as IGetCurrentUserResponse,
    }),
    getters: {
        //获取用户id
        getUserId(): string {
            return this.user.id;
        },
        //获取用户头像
        getUserAvatar(): string {
            return this.userInfo.avatar;
        },
    },
    actions: {
        /**
         * 登录
         * @param userForm.username 用户名
         * @param userForm.password 密码
         * @param userForm.userEmail 用户邮箱
         * @param userForm.smsCode 验证码
         * @returns Promise 对象，解析为类型为 Response<ILoginResponse> 的响应结果
         */
        async userLogin(userForm: ILoginUserInput): Promise<void> {
            const { code, reason } = await LoginService.getLogin(userForm);
            if (code === 200) {
                await router.push('main');
                // 将用户信息存储到本地
                storage.setItem('userId', this.user.id);
            } else {
                ElMessage.error(reason);
            }
        },
        /**
         * 获取用户信息
         * @returns Promise 对象，解析为类型为 Response<data: IGetCurrentUserResponse> 的响应结果
         */
        async getUserInfo(): Promise<void> {
            const { code, reason, data } = await UserService.getCurrentUser();
            if (code === 200) {
                this.userInfo = data as unknown as IGetCurrentUserResponse;
            } else {
                ElMessage.error(reason);
            }
        },
    },
});
