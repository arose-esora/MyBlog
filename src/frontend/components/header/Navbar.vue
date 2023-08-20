<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/subtest">Contents</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/about">Contact</NuxtLink>
    </nav>
</template>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: space-around;
        height: 25px;
        margin-bottom: 5px;

        a {
            color: var(--text-white);
            text-decoration: none;
            position: relative; /* 追加 */
            overflow: hidden;   /* 追加 */
            font-size: 1.2rem;
            transition: 0.3s;

            &::before { /* 追加: 疑似要素を使用して下線を作成 */
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: var(--text-white);
                transition: width 0.3s;

                @include hover {
                    width: 100%;
                }
            }

            @include hover {
                transform: scale(1.2);
                &::before { /* 追加: hover時に線の幅を変更 */
                    width: 100%;
                }
            }
        }
    }
</style>
