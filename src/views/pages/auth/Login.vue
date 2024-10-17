<script>
export default {
    data() {
        return {
            showPassword: false
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        }
    }
};
</script>

<template>
    <div class="lg:flex items-center gap-4 justify-between lg:pr-5 lg:pl-32 mx-auto">
        <div class="grid gap-y-4 p-12 lg:p-0 bgMobile">
            <div class="logo flex items-center gap-4">BP 247</div>
            <div>
                <h6 class="font-bold text-2xl">Login account</h6>
                <p class="text-grey-text">Welcome back. Enter your credentials to access your account</p>
            </div>
            <form action="/" class="grid gap-y-6">
                <div class="grid gap-y-2">
                    <label for="email" class="font-bold">Email Address</label>
                    <input type="email" placeholder="hello@example.com" class="p-3 rounded border border-gray-700" name="" id="email" />
                </div>
                <div class="grid gap-y-2">
                    <label for="password" class="font-bold">Password</label>
                    <div>
                        <div class="relative">
                            <input :type="showPassword ? 'text' : 'password'" class="p-3 rounded border border-gray-700 w-full" id="password" />
                            <span class="right-0 top-1/3 transform -translate-y-1/2 cursor-pointer text-gray-400 absolute" :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'" @click="togglePassword"> </span>
                        </div>
                        <p href="#" class="text-end mt-2 text-Blue-Primary">Forgot Password</p>
                    </div>
                </div>
                <div class="text-start flex gap-2">
                    <input type="checkbox" class="w-[15px] checked:bg-Blue-Primary" name="keepLogin" id="keepLogin" />
                    <label for="keepLogin">Keep me signed in</label>
                </div>
                <button type="submit" class="bg-Blue-Primary rounded-lg border-2 w-full text-center py-4 text-white hover:border-2 hover:bg-transparent hover:text-Blue-Primary hover:border-Blue-Primary">Continue</button>
            </form>
            <!-- SSO -->
            <div class="justify-center text-center mx-auto grid gap-y-4">
                <div class="items-center flex gap-2 justify-center">
                    <hr class="w-12 border-text-teritary" />
                    <p>or sign up with</p>
                    <hr class="w-12 border-text-teritary" />
                </div>
                <div class="flex items-center gap-2 btnSSO">
                    <a href="#">
                        <i class="pi pi-google"></i>
                        Google
                    </a>
                    <a href="#">
                        <i class="pi pi-apple"></i>
                        Apple
                    </a>
                    <a href="#">
                        <i class="pi pi-facebook"></i>
                        Facebook
                    </a>
                </div>
                <h6>Don’t have an Account? <a href="#" class="font-bold text-Blue-Primary">Sign up here</a></h6>
            </div>
        </div>
        <img src="/src/assets/images/LoginImg.png" class="h-[100vh] py-4 w-[700px] bg-contain hidden lg:block" alt="" />
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
