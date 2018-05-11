export function goLoginFn(self) {
    self.$confirm('登录过期,点击确定跳转登录页!', {
        confirmButtonText: '确定',
        cancelButtonText: '',
        showCancelButton: false,
        center: true
    }).then(() => {
        self.$cookie.delete('logId')
        self.$cookie.delete('roleId')
        self.$cookie.delete('userId')
        self.$cookie.delete('username')
        self.$router.push({
            path: '/login'
        });
    }).catch(() => {
    })
}

