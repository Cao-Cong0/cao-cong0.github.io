# Cong Cao — 个人学术主页

无需安装依赖的静态网站，可直接部署到 GitHub Pages。包含个人照片、CV 下载、Google Scholar 入口、中英文切换、深浅色模式、研究成果、教育经历、实习经历、BibTeX 引用与邮箱联系，适配桌面和手机。采用克制的学术风格：雾白、灰紫与金棕、清晰的无衬线字体、圆形个人照片、分隔线列表，以及带主题线稿的论文筛选导航。

## 本地预览

直接打开 `index.html` 即可浏览。也可以在本目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

然后访问 http://127.0.0.1:8000 。复制邮箱功能在 HTTPS 或 localhost 环境中可用，浏览器拒绝剪贴板访问时会提示手动复制。

## 发布到 GitHub Pages

推荐使用账号主页地址 `https://cao-cong0.github.io/`：

1. 在 GitHub 账号 `Cao-Cong0` 下新建公开仓库，名称为 `cao-cong0.github.io`。不需要付费域名。
2. 把本文件夹**里面的文件**上传到仓库的 `main` 分支根目录。`index.html` 必须位于仓库根目录；不要再套一层 `personal-homepage` 文件夹。
3. 打开仓库 **Settings → Pages → Build and deployment**。
4. **Source** 选择 **Deploy from a branch**，**Branch** 选择 **main**，目录选择 **/(root)**，然后点击 **Save**。
5. 在 **Actions** 或 **Settings → Pages** 查看部署结果。首次发布可能需要约 10 分钟。

也可以使用已有的空仓库 `www`，按相同步骤上传并启用 Pages，地址为 `https://cao-cong0.github.io/www/`。本网站使用相对资源路径，兼容这两种部署方式。

发布状态：当前文件为本地改版；尚未创建远程主页仓库、提交代码或开启 Pages。

官方说明：[GitHub Pages 快速入门](https://docs.github.com/en/pages/quickstart)。

## 修改内容

- `index.html`：姓名、简介、论文、作者、邮箱、链接。带 `data-en` / `data-zh` 的文本需要同时修改对应中英文；HTML 元素内的英文为 JavaScript 未启用时的默认内容。
- `styles.css`：颜色、字体、布局。顶部 `:root` 中集中定义了主要颜色。
- `script.js`：语言切换、深浅色模式、照片放大、复制邮箱和滚动导航。更换邮箱时，同时修改本文件与 `index.html` 中的地址。
- `assets/`：个人照片、论文缩略图与网站图标。`portrait.png` 为用户选定的照片，文件未经重新生成、修改或压缩。首屏以 CSS 适度裁切小幅展示，点开后显示完整原图，支持关闭按钮、Esc 和点击遮罩关闭。

新增论文时复制一个 `<article class="publication">`，更新图片、作者、论文链接和 BibTeX，并更新相关编号和元数据。

## 内容依据

初稿整理于 2026-09-10；简介及研究兴趣由以下公开资料概括，建议发布前核对措辞。

- 姓名、博士身份、学校、城市：[GitHub 公开资料](https://github.com/Cao-Cong0)。
- LUIVITON 论文、作者、机构邮箱与展示图：[项目主页](https://cao-cong0.github.io/LUIVITON-Learned-Universal-Interoperable-VIrtual-Try-ON/)，[代码与正式引用](https://github.com/Cao-Cong0/LUIVITON-Learned-Universal-Interoperable-VIrtual-Try-ON)，[DOI](https://doi.org/10.1145/3811307)。
- Sewing Patterns 论文、作者、展示图：[公开仓库](https://github.com/Cao-Cong0/Learning-Sewing-Patterns-via-Latent-Flow-Matching-of-Implicit-Fields)，[arXiv](https://arxiv.org/abs/2601.17740)。已根据用户提供的简历更新为 ACM SIGGRAPH 2026 Conference Papers，Article 179，并标注共同一作。
- 2026-09-11 根据 [Ren Li 的完整论文列表](https://liren2515.github.io/pub.html) 与用户简历核对，共展示 4 篇 Cong Cao 署名论文。
- Spatio-Temporal Garment Reconstruction：作者与内容来自 [arXiv](https://arxiv.org/abs/2602.24043)，TPAMI 2026 已接收状态来自上述作者主页及简历；当前提供 arXiv 版 BibTeX。展示图来自 [作者主页](https://liren2515.github.io/figs/st.png)，保存在 `assets/spatiotemporal.png`。
- Single View Garment Reconstruction：作者、SIGGRAPH 2025 信息与 BibTeX 来自 [项目主页](https://liren2515.github.io/page/dmap/dmap.html)、[arXiv](https://arxiv.org/abs/2504.08353) 与 [代码仓库](https://github.com/liren2515/DMap)。展示图来自 [作者主页](https://liren2515.github.io/figs/disp.png)，保存在 `assets/single-view.png`。
- 按用户提供的链接增加 Sewing Patterns 的 [项目主页](https://cao-cong0.github.io/Learning-Sewing-Patterns-via-Latent-Flow-Matching-of-Implicit-Fields/) 与 [视频](https://www.youtube.com/watch?v=xs8Yi8BgTMM&t=1s)、[LUIVITON 视频](https://www.youtube.com/watch?v=ctG9DeKy6jc&t=1s)、[Single View 视频](https://www.youtube.com/watch?v=rcIs6RO5juo)。Sewing Patterns 的缩略图也跳转到项目主页。
- 根据 [Yingxuan You 的主页](https://kasvii.github.io/) 核对 Spatio-Temporal 的作者、共同一作和 TPAMI 2026 状态，并补充 [官方代码仓库](https://github.com/kasvii/DMap)。该主页未列出此论文的独立项目页或视频。
- 博士三年级与服装重定向方向由用户明确补充；导师、Google Scholar、CV 文件及论文的正式发表信息来自用户提供的两页简历。
- `assets/Cong_Cao_CV.pdf` 为该简历的原样副本，源文件未修改。
- Education 与 Internship 板块按用户提供的同一份简历整理：MBZUAI 博士与硕士、University of Bristol 机器人学硕士、Xidian University 学士，以及 2023 年 5–7 月 Yalla Group 的研发实习。保留简历中的起止月份、导师、Distinction 和 GPA。顶部导航包含新增板块；窄屏导航分为两行。
- 学校及公司标志采用用户提供的 4 张 PNG 原图，保存在 `assets/logo-{mbzuai,bristol,xidian,yalla}.png`，没有改色、裁剪或重新生成。教育与实习经历各展示对应标志；深浅色模式均使用白底以保留标志的可读性。
- Bristol 导师姓名链接至用户指定的 [Paul O’Dowd 主页](https://research-information.bris.ac.uk/en/persons/paul-j-odowd/)；Graduated with Distinction 在中英文版本中均加粗。
- 移除照片上的箭头，点击照片本身仍可查看完整原图。
- 在两段硕士经历下补充学位论文。Bristol 的论文标题根据用户提供的 PDF 封面核对为 Exploring Local Communication to Improve Swarm Box Pushing，原文件完整复制为 `assets/bristol-msc-dissertation.pdf`。MBZUAI 的论文标题根据 [学校论文库](https://irep.mbzuai.ac.ae/items/0a2a4187-1134-4598-b102-7fa736570eba) 核对为 A Virtual Try-On System for Any Clothing and Body Model（Cong Cao，2024）；链接指向原始库记录。
- 首页英文姓名旁补充用户提供的中文姓名 `(曹聪)`，窄屏可自然换行。
- 左上角保留原版 cc 与交叠花瓣线稿小花；照片采用圆形裁切，取消外围花朵、光环、旋转、漂浮及入场动画。点开后仍显示完整矩形原图。

项目图片来自上述作者公开项目。未添加第三方追踪脚本、远程字体服务或站点分析。字体文件随站点本地托管。语言和主题偏好保存在访问者本地浏览器中；未选择主题时跟随系统设置。页面没有入场、悬停位移或旋转动画。

## 视觉风格

采用雾白背景（#F9F8FB）、灰紫主色（#66507F）与金棕点缀（#80603A）。链接和按钮用灰紫，页头小花和论文标签用金棕；标签保持浅底。正文和辅助文字采用深灰紫，提高阅读对比度。简介为 17px，论文摘要为 16px，作者与主要链接为 15px；小屏幕同步提高字号，主题筛选在平板端分行排列。浅色标签背景保持克制。

以姓名、研究简介和论文为主要层级。姓名使用较圆润的 Nunito 600，字号随屏幕在 34–42px 之间调整，中文姓名为 18px。栏目及论文标题使用 Montserrat，正文使用 Roboto，中文采用系统无衬线字体；导师、学校、论文资源及其他主要文字链接加粗。原版 cc Logo 继续使用 Georgia。教育经历以细线连接 Logo。首屏照片为圆形，最大直径 230px，手机为 180px，继续支持点击显示完整原图。深色模式使用深灰紫背景、浅灰紫链接与浅金棕点缀；手机导航分两行，中文按钮保持横向单行显示。

字体从 Google Fonts 获取，400–700 字重范围的 Latin / Latin Extended WOFF2 文件保存在 `assets/fonts/`，使用 `font-display: swap`，不依赖外部字体请求。两款字体均采用 SIL Open Font License 1.1，许可证分别见 `assets/fonts/montserrat-OFL.txt` 和 `assets/fonts/roboto-OFL.txt`；上游为 [Montserrat](https://github.com/google/fonts/tree/main/ofl/montserrat) 和 [Roboto](https://github.com/google/fonts/tree/main/ofl/roboto)。

姓名使用的 [Nunito](https://github.com/google/fonts/tree/main/ofl/nunito) 另以 Latin 600 字重 WOFF2 文件随站点托管，约 17 KB；同样采用 SIL Open Font License 1.1，许可证见 `assets/fonts/nunito-OFL.txt`。只修改姓名的字形与比例，其他字体保持原设置。

## 研究方向交互

主题导航使用原生按钮，可按虚拟试衣、服装裁片和三维重建筛选论文；All/全部可恢复完整列表。默认展示全部 4 篇论文。标题旁的筛选数量随筛选更新，结果提示仅供屏幕阅读器播报，不在页面显示额外的统计行；原生按钮支持键盘操作；禁用 JavaScript 时仍展示所有论文，打印也保留全部论文。主题图标为页面内的 SVG 线稿，没有外部依赖。

## 本次验证

论文筛选函数已通过独立逻辑测试，覆盖各主题的论文匹配、数量、选中状态、中英文状态文字和恢复全部论文。

已检查本地资源路径、页面锚点、ID 唯一性和中英文文本配置，未发现缺失文件或无效锚点。已通过 JavaScript 语法检查；选定照片与网站中照片的 SHA-256 完全一致。浏览器的已保存权限设置阻止本地 HTTP 预览，工具也不支持当前 file:// 页面，因此实际排版及交互尚未通过浏览器验证。可以直接刷新已打开的 index.html 查看新版。在线发布尚未进行。

## 页面细节

简介直接从姓名开始，移除 Computer Vision Research 小标题。论文只在会议或期刊标签中显示年份，不再在右侧重复；配图增加柔和的悬浮投影，鼠标悬停或键盘聚焦时投影略加强，无位移或循环动画，打印时去掉阴影。Paper、Project、Code、Video 使用无箭头的描边链接按钮，中英文同步更新。移除文字链接后的外跳箭头及 Bristol 学位论文标题后的 PDF 字样；所有链接地址、正文、照片与学位论文文件保持不变。

## 社交链接图标

首页使用邮箱、Google Scholar、GitHub、LinkedIn 和 CV 文档图标代替文字链接，采用随主题切换的灰紫色。图标为 28px，点击区域为 44px；鼠标悬停或键盘聚焦时显示名称，辅助技术可直接读取每个链接的名称。英文和中文名称随页面语言切换。

图标来自 [Font Awesome Free 6.7.2](https://github.com/FortAwesome/Font-Awesome/tree/6.x)，以 SVG 内嵌到页面中，仅使用对应的 5 个图标，无远程图标请求。原路径与归属注释保留，页面通过 currentColor 设置颜色与统一尺寸；图标采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，许可证见 `assets/icons/Font-Awesome-LICENSE.txt`。
