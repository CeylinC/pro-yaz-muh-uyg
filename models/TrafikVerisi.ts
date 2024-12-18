export interface ZamanAraligi {
    doluluk: number;
    toplam_gecen_arac: number;
}

export interface Gun {
    "00:00-06:00": ZamanAraligi;
    "06:00-10:00": ZamanAraligi;
    "10:00-13:00": ZamanAraligi;
    "13:00-16:00": ZamanAraligi;
    "16:00-20:00": ZamanAraligi;
    "20:00-24:00": ZamanAraligi;
}

export interface TrafikVerisi {
    pazartesi: Gun;
    sali: Gun;
    carsamba: Gun;
    persembe: Gun;
    cuma: Gun;
    cumartesi: Gun;
    pazar: Gun;
}