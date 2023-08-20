<template>
    <v-app id="inspire">
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="4" v-for="n in 6" :key="n">
                    <ArticleCard />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>