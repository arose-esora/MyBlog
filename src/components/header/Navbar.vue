<template>
    <nav>
        <div>
            <NuxtLink to="/">
                <span>Home</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/">
                <span>Contents</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/about">
                <span>About</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/contact">
                <span>Contact</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<style scope lang="scss">
    nav {
        display: flex;
        justify-content: space-around;
        border-top: 2px solid var(--secondary-color);

        div {
            flex: 1;
            padding-bottom: 3px;
            &:not(:last-child) {
                border-right: 2px solid var(--secondary-color);
            }
        }

        a {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 1.3rem;
            text-decoration: none;
            color: var(--text-white);
            font-family: var(--montserrat);

            span {
                display: inline-block;
                transition: 0.3s;
                position: relative;
                transform-origin: center;
                &::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 4px;
                    left: 0;
                    background-color: var(--text-white);
                    transition: width 0.3s;
                }
            }

            @include hover {
                span {
                    transform: scale(1.2);
                    &::before {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>