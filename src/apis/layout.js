import http from "@/utils/http";

// 获得动态数据
export function getCategoryAPI(){
    return http.get('home/category/head');
}