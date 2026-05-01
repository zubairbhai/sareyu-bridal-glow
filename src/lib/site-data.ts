export const BRAND = {
  name: "Sareyu",
  artist: "Mathangi Saraswathi",
  tagline: "Beauty That Feels Timeless",
  location: "Hyderabad",
  phone: "+91 9133492986",
  phoneRaw: "919133492986",
  email: "sareyu9133@gmail.com",
  instagram: "saraswatimathangi",
  instagramUrl: "https://instagram.com/saraswatimathangi",
  whatsapp: "https://wa.me/919133492986",
  whatsappBook:
    "https://wa.me/919133492986?text=Hi%20Sareyu%2C%20I%27d%20like%20to%20book%20a%20makeup%20appointment.",
  logo: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777485113/IMG-20260429-WA0014_uub6e0.jpg",
};

export const GALLERY = [
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482222/IMG-20260429-WA0002_zto43i.jpg", category: "Bridal" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482990/Screenshot_2026_0429_224420_axikl9.png", category: "Working Shots" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482222/IMG-20260429-WA0006_wq7w4g.jpg", category: "Bridal" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482222/IMG-20260429-WA0005_nhasgx.jpg", category: "Bridal" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482223/IMG-20260429-WA0012_mjno2x.jpg", category: "Bridal" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482223/IMG-20260429-WA0011_u0zsnj.jpg", category: "Bridal" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482222/IMG-20260429-WA0003_shlhfd.jpg", category: "Bridal" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777483075/IMG-20260429-WA0047_lromna.jpg", category: "Behind the Scenes" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777483079/Screenshot_2026_0429_224513_woo0is.png", category: "Working Shots" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777483077/IMG-20260429-WA0048_puidhc.jpg", category: "Behind the Scenes" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777483077/Screenshot_2026_0429_224447_ugqqff.png", category: "Working Shots" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482650/file_000000007264720b9fd9f33150dc2c1c_bn7qmo.png", category: "Before/After" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482649/file_000000007f58720ba2a62d78f3c181d0_eb7nhv.png", category: "Before/After" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482647/file_00000000c3d4720ba0c2d0616c6b7024_azbdho.png", category: "Before/After" },
];

export const VIDEOS = [
  "https://res.cloudinary.com/dadu9qcfz/video/upload/v1777482498/VID-20260429-WA0019_k4dicy.mp4",
  "https://res.cloudinary.com/dadu9qcfz/video/upload/v1777482333/VID-20260429-WA0022_errwxl.mp4",
  "https://res.cloudinary.com/dadu9qcfz/video/upload/v1777482330/VID-20260429-WA0049_ogsbr6.mp4",
  "https://res.cloudinary.com/dadu9qcfz/video/upload/v1777483086/VID-20260429-WA0020_bqgnyz.mp4",
  "https://res.cloudinary.com/dadu9qcfz/video/upload/v1777483026/VID-20260429-WA0033_p9gsra.mp4",
];

// Hero slides: mix of images and videos
export const HERO_SLIDES: Array<{ type: "image" | "video"; src: string }> = [
  { type: "image", src: GALLERY[0].src },
  { type: "video", src: VIDEOS[0] },
  { type: "image", src: GALLERY[2].src },
  { type: "video", src: VIDEOS[1] },
  { type: "image", src: GALLERY[4].src },
];

// Desktop-only hero background images
export const HERO_DESKTOP_IMAGES: string[] = [
  "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777553780/40c9cf76-c8c4-4662-9981-b9c6119f6e68_f5nvdl.png",
  "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777553588/acfbea06-0dc2-4955-a7d9-de53968e3521_lbka7p.png",
  "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777553263/download_kv9hhh.jpg",
  "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777553339/download_xbueeu.jpg",
  "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777553698/5b63771a-b46e-427d-afb4-570545da5cf2_hvbilz.png",
];

export const BEFORE_AFTER = [
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482650/file_000000007264720b9fd9f33150dc2c1c_bn7qmo.png" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482649/file_000000007f58720ba2a62d78f3c181d0_eb7nhv.png" },
  { src: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482647/file_00000000c3d4720ba0c2d0616c6b7024_azbdho.png" },
];