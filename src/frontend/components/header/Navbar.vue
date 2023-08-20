<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">Contents</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
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
            position: relative;
            overflow: hidden;
            transition: 0.3s;

            &::before {
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
                &::before {
                    width: 100%;
                }
            }
        }
    }
</style>
