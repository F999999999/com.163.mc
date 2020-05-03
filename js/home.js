// 顶部导航-广告
$(".header-ad").hover(
    function () {
        $(this).css({ overflow: "visible" }).find(">img").hide();
    },
    function () {
        console.log(2222);
        $(this).css({ overflow: "hidden" }).find(">img").show();
    }
);

// 二维码绿线上下移动
function qrcodeDiv() {
    $(".qrcode div").animate(
        {
            top: -10,
        },
        2000,
        function () {
            $(this).animate(
                {
                    top: $(this).siblings("img").height() - 10,
                },
                2000
            );
        }
    );
}
// 先执行一次(解决定时器4秒后才能执行第一次)
qrcodeDiv();
// 设置定时器循环执行
setInterval(qrcodeDiv, 4000);

// 顶部导航-游戏目录显示隐藏
$(".topbar-left").hover(
    function () {
        $(".topbar-game").css({
            height: 500,
        });
    },
    function () {
        $(".topbar-game").css({
            height: 0,
        });
    }
);

$(".topbar-game").hover(
    function () {
        $(".topbar-game").css({
            height: 500,
        });
    },
    function () {
        $(".topbar-game").css({
            height: 0,
        });
    }
);

// 顶部导航-游戏目录小图标
let menuListArr = [
    "NO1",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    ,
    ,
    ,
    "HOT",
    "HOT",
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    ,
    ,
    ,
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    "HOT",
    ,
    ,
    ,
    ,
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    "NEW",
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    "HOT",
    "HOT",
    "HOT",
    "NEW",
    "NEW",
    ,
    ,
    "NEW",
    "HOT",
];
menuListArr.forEach(function (m, i) {
    if (m == "NO1") {
        $(".topbar-game-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -267px",
        });
    } else if (m == "HOT") {
        $(".topbar-game-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -144px",
        });
    } else if (m == "NEW") {
        $(".topbar-game-list").find("em").eq(i).css({
            background: "url(./images/sprite-w_dd519f4.png) no-repeat",
            backgroundPosition: "right -206px",
        });
    }
});

// 顶部导航-右边轮播
let topbarRightArr = ["25元专属券限时领！", "限时领取免费教程"];

setInterval(function () {
    $(".topbar-right a").animate(
        {
            opacity: 0,
            top: "-100%",
        },
        400,
        function () {
            let index = topbarRightArr.indexOf($(".topbar-right a").text());
            if (index < topbarRightArr.length - 1) {
                $(".topbar-right a").text(topbarRightArr[index + 1]);
            } else {
                $(".topbar-right a").text(topbarRightArr[0]);
            }
            $(this)
                .css({
                    top: "100%",
                })
                .animate(
                    {
                        opacity: 1,
                        top: 0,
                    },
                    400
                );
        }
    );
}, 4000);

// 顶部导轨-热点推荐
$(".topbar-recommend").hover(
    function () {
        $(".topbar-hot").css({
            height: 378,
        });
    },
    function () {
        $(".topbar-hot").css({
            height: 0,
        });
    }
);

$(".topbar-hot").hover(
    function () {
        $(".topbar-hot").css({
            height: 378,
        });
    },
    function () {
        $(".topbar-hot").css({
            height: 0,
        });
    }
);

// 第一版-打开视频
$(".header-video a").on("click", function () {
    $(".video").show().find("video").trigger("play")[0].currentTime = 0;
});

// 第一版-关闭视频
$(".video .stop").on("click", function () {
    $(".video").hide().find("video").trigger("pause");
});

// 浮动导航-固定顶部
function getFloatnav() {
    if ($(document).scrollTop() >= $(".topbar").height()) {
        $(".floatnav")
            .css({
                position: "fixed",
                top: 0,
                height: 118,
                background:
                    "url(./images/top_bg_3cd9741.png) center top no-repeat",
            })
            .find(".header-logo")
            .hide()
            .siblings(".floatnav-left")
            .show();
    } else {
        $(".floatnav")
            .css({
                position: "absolute",
                top: 55,
                height: 92,
                background:
                    "url(./images/top_bg1_db2a296.png) center top no-repeat",
            })
            .find(".header-logo")
            .show()
            .siblings(".floatnav-left")
            .hide();
    }
}
getFloatnav();
$(document).scroll(getFloatnav);

// 第二版_第一块-轮播图
function getCarousel() {
    // 实时计算轮播图宽度
    $(".carousel-img").css({
        width: $(".carousel-img li").length * $(".carousel-img li").width(),
    });
    // 判断轮播图是否到最后一张
    if (
        $(".carousel-img").position().left * -1 >=
        $(".carousel-img li").width() * ($(".carousel-img li").length - 1)
    ) {
        $(".carousel-img").css({ left: 0 });
    }
    $(".carousel-img").animate(
        {
            left:
                $(".carousel-img").position().left -
                $(".carousel-img li").width(),
        },
        200
    );
    // 小点
    $(".carousel-list li")
        .removeClass("active")
        .eq(
            ($(".carousel-img").position().left * -1) /
                $(".carousel-img li").width()
        )
        .addClass("active");
}
// 克隆最后一张轮播图到最前面
$(".carousel-img")
    .prepend($(".carousel-img li:last").clone(true))
    .css({ left: -$(".carousel-img li").width() });
// 轮播
carouselTimer = setInterval(getCarousel, 2000);
// 鼠标移入暂停轮播
$(".carousel-img").hover(
    function () {
        clearInterval(carouselTimer);
    },
    function () {
        carouselTimer = setInterval(getCarousel, 2000);
    }
);
// 鼠标移入小点切换轮播图
$(".carousel-list").on("mousemove", "li", function () {
    let $index = $(this).index();
    // 暂停轮播
    clearInterval(carouselTimer);
    // 图片切换
    $(".carousel-img")
        .stop(true)
        .animate(
            {
                left: -$(".carousel-img li").width() * ($(this).index() + 1),
            },
            200,
            function () {
                // 小点切换
                $(".carousel-list li")
                    .removeClass("active")
                    .eq($index)
                    .addClass("active");
            }
        );
    // 启动轮播
    carouselTimer = setInterval(getCarousel, 2000);
});

// 第二版_第一块-新闻
$(".news-nav ul").on("mouseover", "li", function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".news-con")
        .stop()
        .animate(
            {
                left: -$(".news-con ul").width() * $(this).index(),
            },
            400,
            function () {}
        );
});

// 分享二维码切换
$(".ewm-tab").on("mouseover", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    $(".ewm-img").animate(
        {
            left: -$(".ewm-img>div").width() * $(this).index(),
        },
        400
    );
});

// 第二版_第三块-切换作品类型
$(".part3-nav-list").on("mouseover", "li", function () {
    let oLi = $(this);
    $(this).addClass("active").siblings().removeClass("active");
    $(".part3-box>ul")
        .stop()
        .animate(
            {
                opacity: 0,
            },
            100,
            function () {
                $(".part3-box>ul")
                    .hide()
                    .eq(oLi.prevAll().length)
                    .show()
                    .animate(
                        {
                            opacity: 1,
                        },
                        100
                    );
            }
        );
});

// 第二版_第三块-投票(点赞)
// 初始化点赞数量
zanArr = [1999, 1461, 1727, 2868, 1272, 1908, 1698, 1356];
zanArr.forEach(function (v, i) {
    $(".part3-box-over li>p").eq(i).text(v);
});

$(".part3-box-over li>p").on("click", function () {
    if (+$(this).text() == zanArr[$(this).parent().prevAll().length]) {
        $(this).text(+$(this).text() + 1);
        $(".alert-vote")
            .css({
                opacity: 1,
                display: "block",
            })
            .find(".alert-vote-text")
            .text("投票成功");
    } else {
        $(".alert-vote")
            .css({
                opacity: 1,
                display: "block",
            })
            .find(".alert-vote-text")
            .text("今天已经投过票了，请明天再来");
    }
});

// 无检测点赞
$(".part4-box-list li").on("click", ">p", function () {
    $(".alert-vote")
        .css({
            opacity: 1,
            display: "block",
        })
        .find(".alert-vote-text")
        .text("投票成功");
    $(this).text(+$(this).text() + 1);
    return false;
});

// 点赞窗口内点赞
$(".alert-image-pop-link").on("click", function () {
    $(".part3-box-over li>p").click();
    // $(this).text(+$(this).text() + 1);
    $(this)
        .show()
        .text(
            $(".part3-box-over")
                .find(
                    `img[src='${$(this)
                        .parents(".alert-image-pop")
                        .find(".alert-image-pop-con img")
                        .attr("src")}']`
                )
                .parents("li")
                .find(">p")
                .text()
        );
});

// 打开弹窗
function getAlertImage(n) {
    console.log(n);
    $(".alert-image-pop-name").text($(n).find("p").eq(0).text());
    $(".alert-image-pop-author").text($(n).find("p").eq(1).text());

    $(".alert-image-pop-con")
        .find("img")
        .attr("src", $(n).siblings("img").attr("src"));
}

// 打开点赞弹窗
$(".part3-box-over .list-box-zan").on("click", function () {
    $(".alert-image").show();
    $(".alert-image-pop-link")
        .show()
        .text($(this).parents("li").find(">p").text());
    getAlertImage(this);
});

// 打开图片弹窗
$(".part3-box-image .list-box-zan").on("click", function () {
    console.log($(this).find("p"));
    $(".alert-image").show();
    $(".alert-image-pop-dl").show();
    getAlertImage(this);
});

// 关闭图片弹窗
$(".alert-image-off").on("click", function () {
    $(".alert-image").hide();
    $(".alert-image-pop-dl").hide();
    $(".alert-image-pop-link").hide();
});

// 第二版_第三块-点赞遮罩
$(".part3-box li").hover(
    function () {
        $(this)
            .find(".list-box-zan")
            .animate(
                {
                    height: "100%",
                    opacity: 1,
                },
                100,
                function () {
                    $(this).parents("li").find(">p").show();
                }
            );
    },
    function () {
        $(this)
            .find(".list-box-zan")
            .animate(
                {
                    height: 0,
                    opacity: 0,
                },
                100,
                function () {
                    $(this).parents("li").find(">p").hide();
                }
            );
    }
);

// 关闭点赞结果弹窗
$(".alert-vote-wrap a").on("click", function () {
    $(".alert-vote").css({
        opacity: 0,
        display: "none",
    });
});

// 下载按钮点击跳转
$(".alert-image-pop-dl").on("click", function () {
    window.open(
        $(this).parents(".alert-image-pop").find("img").attr("src"),
        "_self"
    );
});

$(".part3-box-image>li>p").on("click", function () {
    window.open(
        $(this).siblings(".part3-list-box").find("img").attr("src"),
        "_self"
    );
});

// 第二版_第四块-导航
$(".part4-nav").on("mouseover", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
});

// 第二版_第四块-播放按钮遮罩(移入显示)
$(".video-hm")
    .parent()
    .hover(
        function () {
            $(this).find(".video-hm").css({
                opacity: 1,
                height: "100%",
            });
            $(this)
                .find(".video-btn")
                .css({
                    marginTop:
                        ($(this).height() -
                            $(this).find(".video-btn").height()) /
                        2,
                    opacity: 1,
                });
        },
        function () {
            $(this).find(".video-hm").css({
                opacity: 1,
                height: 0,
            });
            $(this).find(".video-btn").css({
                opacity: 0,
            });
        }
    );

// 第二版_第四块-播放按钮遮罩(移入隐藏)
$(".video-bf")
    .parent()
    .hover(
        function () {
            $(this).find(".video-bf").css({
                opacity: 0,
                height: 0,
            });
            $(this).find(".video-btn").css({
                opacity: 0,
            });
        },
        function () {
            $(this)
                .find(".video-bf")
                .css({
                    opacity: 1,
                    height: $(this).find("img").height(),
                });
            $(this)
                .find(".video-btn")
                .css({
                    marginTop:
                        ($(this).find("img").height() -
                            $(this).find(".video-btn").height()) /
                        2,
                    opacity: 1,
                });
        }
    );

// 第二版_第四块-打开视频
$(".video-hm")
    .parent()
    .on("click", function () {
        $(".hm-video").show().find("video").trigger("play")[0].currentTime = 0;
    });

$(".video-bf")
    .parent()
    .on("click", function () {
        $(".hm-video").show().find("video").trigger("play")[0].currentTime = 0;
    });

// 第二版_第四块-关闭视频
$(".hm-video .stop").on("click", function () {
    $(".hm-video").hide().find("video").trigger("pause");
});

// 第二版_第四块-视频列表切换
$(".part4-nav li").on("mouseover", function () {
    if ($(this).index() != $(".part4-nav .active").index()) {
        $(this).addClass("active").siblings().removeClass("active");

        $(".video-box-list-item")
            .stop()
            .animate(
                {
                    opacity: 0,
                },
                100
            )
            .hide()
            .eq($(this).index())
            .show()
            .animate(
                {
                    opacity: 1,
                },
                100
            );
    }
    return false;
});

// 第二版_第五块-攻略切换
$(".gs-title").on("mouseover", "a", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".gs-box")
        .stop()
        .animate(
            {
                left: -$(".gs-box ul").width() * $(this).index(),
            },
            200
        );
});

// 第二版_第五块
// 合成配方存储对象
let closeArr = [
    {
        75: [77, 77, 77, 76, 78, 76, 79, 79, 79],
        76: [, , , , 15],
        82: [, , , 79, 79, 79],
        83: [, , , 84, 85, , , 51],
        86: [, , , 87, 76, , , 78],
        89: [, , , 79, 90, 79],
        99: [100, 100, 100, 100, 100, 100, , 51],
        101: [, 103, , 28, 102, 84, , 51],
    },
    {},
    {
        107: [79, 79, 79, 79, 79, 79, 79, 79, 79],
        113: [91, 91, 91, 91, 91, 91, 91, 91, 91],
    },
    {
        1: [, , , 2, , 2, , 2],
        6: [, , , 7, , 7, 7, 7, 7],
        8: [, , , 9, 9, 9, 7, 7, 7],
        10: [14, 14, 14, 14, 11, 14, 14, 14, 14],
        11: [, 12, , 12, 13, 12, , 12],
        14: [, , , 15, 15, 15],
        19: [, 22, , 20, 21, 20, 21, 21, 21],
        22: [, , , 14, 14, , 14, 23],
        24: [7, 7, 7, 7, 7, 7, , 17],
        25: [, , , 7, 7, , 7, 7],
        27: [, , , 16, , , , 28],
        29: [, , , 30, , 30, , 30],
        31: [17, 17, 17, 17, 9, 17, 17, 17, 17],
        32: [, , , , 12, , 12],
        33: [, , , 12, , 12, 12, 12, 12],
        34: [17, 17, 17, , 17, , 17, 35, 17],
        36: [12, , 12, 12, , 12, 12, 12, 12],
        37: [12, , 12, 12, 38, 12, , 12],
        38: [7, 7, 7, 7, , 7, 7, 7, 7],
        39: [7, 7, , 7, 7, , 7, 7],
        41: [, , , , 43, , 42, 42, 42],
        44: [, , , 22, 45, , , 46],
        47: [12, , 12, 12, 17, 12, 12, , 12],
        48: [49, 49, 49, , 12, , 12, 12, 12],
        50: [, , , 12, , 12, , 12],
        51: [, , , 7, , 7, , 7],
        52: [17, 17, 17, 17, 23, 17, 17, 17, 17],
        53: [, 54, , 54, 13, 54, , 54],
    },
    {
        115: [7, 7, , , 17, , , 17],
        116: [7, 7, , 7, 17, , , 17],
        117: [7, 7, 7, , 17, , , 17],
        118: [, 17, 18, 17, , 18, , 17, 18],
        119: [23, 23, 23, 23, , 23, 23, , 23],
        120: [, 7, , , 7, , , 17],
        121: [, 122, , , 17, , , 46],
        123: [, 7, , , 17, , , 17],
        125: [, , , 23, 23, 23, 23, , 23],
        126: [23, , 23, 23, 23, 23, 23, 23, 23],
        127: [, , , 23, , 23, 23, , 23],
    },
    {
        70: [13, 13, 13, 13, 13, 13, 13, 13, 13],
    },
    {
        55: [, , , 56, 42],
        56: [, , , 42, 57, , 57, 42],
        60: [, , , 56, 57],
        64: [, , , 3, 3, , 3, 3],
        67: [, , , 66, 66, , 66, 66],
        68: [, , , 69, 69, , 69, 69],
    },
];
// 物品介绍存储对象
let nameArr = [
    {
        75: ["蛋糕", "蛋糕是能被玩家吃掉的食物方块。"],
        76: ["糖", "糖是从甘蔗收获下来的一种食物材料，可以通过甘蔗获得。"],
        80: [
            "腐肉",
            "腐肉是一种能被玩家食用的食物类物品，食用后有几率食物中毒，可以通过所有种类的僵尸和僵尸猪人掉落获得。",
        ],
        81: [
            "河豚",
            "河豚是一种通过钓鱼获得能食用的酿造材料，能够通过钓鱼获得。",
        ],
        82: ["面包", "面包是一种食物类物品，可以由小麦合成或者地牢发现获得。"],
        83: [
            "蘑菇煲",
            "蘑菇煲是一种食物类物品，能通过拿着碗对哞菇按右键获得。",
        ],
        86: ["南瓜派", "南瓜派是一种食物类物品。"],
        88: [
            "苹果",
            "苹果是一种食物类物品，有几率通过树叶获得，也有可能自然生成。",
        ],
        89: ["曲奇", "曲奇是一种较容易获得的食物物品。"],
        91: ["西瓜片", "西瓜片是一种食物物品，能够通过西瓜获得。"],
        92: ["生鲑鱼", "生鲑鱼是一种食物物品，能够通过钓鱼获得。"],
        93: [
            "生鸡肉",
            "生鸡肉是一种食物类物品，在熔炉可以被烹饪成为熟鸡肉，可以通过鸡死亡获得。",
        ],
        94: [
            "生牛肉",
            "生牛肉是一种食物类物品，在熔炉可以被烹饪成牛排，可以通过牛和哞菇死亡时获得。",
        ],
        95: [
            "生兔肉",
            "生兔肉是一种食物类物品，在熔炉可以被烹饪成熟兔肉，可以通过兔子死亡获得。",
        ],
        96: [
            "生羊肉",
            "生羊肉是一种食物类物品，在熔炉可以被烹饪成熟羊肉，可以通过羊死亡获得。",
        ],
        97: ["生鱼", "生鱼是一种食物物品，可以通过钓鱼获得。"],
        98: ["生猪排", "生猪排是一种食物类物品，可以在猪死亡时获得。"],
        99: ["甜菜汤", "甜菜汤是一种液体食物类物品。"],
        101: ["兔肉煲", "兔肉煲是一种食物类物品。"],
        104: ["小丑鱼", "小丑鱼是一种食物物品，可以通过钓鱼获得。"],
    },
    {
        128: [
            "凋灵",
            "凋灵是一种具有飞行能力并且有三个头的Boss 生物。就像其它的怪物，凋灵不会在和平模式下生成，也会在和平模式下消失。",
        ],
        129: [
            "末影龙",
            "末影龙是一个 Boss生物，出现在末路之地。末影龙被杀死后，光束会从末影龙的身体里散发出来，同时它会慢慢升空并破碎。",
        ],
        130: [
            "豹猫",
            "豹猫是一种被动性生物，可以被驯服。一对猫能通过拿着任何一种生鱼分别右击以使它们繁殖。一对猫能通过拿着任何一种生鱼分别右击以使它们繁殖。",
        ],
        131: [
            "蝙蝠",
            "蝙蝠是一种生成在洞穴里面的会飞行的被动型生物。当蝙蝠睡觉或空闲时，它会倒挂在任何固体方块的下表面。一旦玩家接近，蝙蝠将会飞走。蝙蝠不能倒挂在透明方块或非固体方块上。",
        ],
        132: [
            "村民",
            "村民是一个可与玩家进行交易的智能被动型NPC，包含5种职业：农民、图书管理员、牧师、铁匠、屠夫。",
        ],
        133: [
            "鸡",
            "鸡是一种能够下蛋的被动型生物。鸡可使用小麦种子进行繁殖，并产下一只小鸡。",
        ],
        134: [
            "马",
            "马是一种可被驯服的生物，并拥有5个变种：普通马、驴、骡、僵尸马和骷髅马。",
        ],
        135: ["哞菇", "哞菇是一种在蘑菇生物群系中生成的特殊的牛。"],
        136: [
            "牛",
            "牛是一种被动型生物。牛会在主世界中随机地产生，通常以4-10只为一个族群。他们会躲开悬崖以避免摔落伤害。它们会漫无目的地游荡、哞叫。",
        ],
        137: [
            "兔子",
            "兔子是一种无害和被动的生物。兔子会漫无目的地跳跃而不是走动，它们会自己寻找并吃成熟的胡萝卜作物。",
        ],
        138: [
            "羊",
            "羊是能够供给羊毛的被动型生物。与其它被动型生物一样，羊会漫无目的地游荡，通常会避免从高处掉落防止受到摔落伤害，通常避开水。",
        ],
        139: [
            "鱿鱼",
            "鱿鱼是一种有八只触手的生物，生成在水中。鱿鱼总是会被动地朝向玩家，类似于其它被动型生物。",
        ],
        140: [
            "猪",
            "猪是一种被动型生物，可以被骑乘。猪的行为类似其它的被动型生物：它们会漫无目的地徘徊，避免从悬崖高处掉落造成跌落伤害，并且通常避开水。",
        ],
        141: [
            "凋灵骷髅",
            "凋灵骷髅是一种危险的攻击型生物，天然生成于下界要塞。",
        ],
        142: ["蠹虫", "蠹dù虫是一种小型的似虫攻击型生物。"],
        143: [
            "恶魂",
            "恶魂是一种巨大的、浮空的、会向玩家发射火球的生物，存在于下界。",
        ],
        144: [
            "鸡骑士",
            "鸡骑士是一种小僵尸、小僵尸村民、小尸壳或小僵尸猪人骑着鸡的罕见组合。",
        ],
        145: [
            "僵尸",
            "僵尸是一种常见的亡灵攻击型生物。僵尸会试图避开障碍，包括绝对悬崖以及熔岩，并且会尝试找到到达玩家位置的最短路径。",
        ],
        146: ["骷髅", "骷髅是能够使用弓进行远程攻击的亡灵生物。"],
        147: ["烈焰人", "烈焰人是一种有黄色皮肤和黑色眼睛的生物，存在于下界。"],
        148: ["末影螨", "末影螨是最小的一种敌对生物。"],
        149: [
            "女巫",
            "女巫是一种能够使用喷溅药水作为远程武器的攻击型生物，在防御时它们会使用有增益效果的药水。",
        ],
        150: ["爬行者", "爬行者是一种常见的，接近玩家后会爆炸的敌对生物。"],
        151: [
            "潜影贝",
            "潜影贝是在末路之地的外部末地岛的末地城生成的敌对生物，它们会将自己隐藏在贝壳里来潜伏在紫珀块旁。",
        ],
        152: ["史莱姆", "史莱姆是一种存在于沼泽生物群系和地底下的攻击型生物。"],
        153: ["守卫者", "守卫者是一种存在于水下的攻击型生物。"],
        154: [
            "岩浆怪",
            "岩浆怪是一种存在于下界的敌对生物，拥有一身深红色与黑色混杂的皮肤和一双橙黄色的眼睛。",
        ],
        155: [
            "远古守卫者",
            "远古守卫者是一种只生成在海底遗迹的敌对生物，是守卫者的更强变种。",
        ],
        156: [
            "蜘蛛骑士",
            "蜘蛛骑士是一种由骷髅、流髑或凋灵骷髅骑在蜘蛛或洞穴蜘蛛身上形成的攻击型生物。",
        ],

        157: [
            "狼",
            "狼是一种能够与玩家联合的中立型生物，可被驯服。自然生成的狼是未驯服的，如果玩家攻击它们，它们会变成敌对。",
        ],
        158: [
            "铁傀儡",
            "铁傀儡是一种大型的，强壮的，用来保护村民的效用性生物。",
        ],
        159: ["雪傀儡", "雪傀儡是一种效用型生物，可以帮助抵御敌对生物。"],
        160: [
            "北极熊",
            "北极熊是一种中立型的生物。但它们在被攻击后会变成敌对状态。它们会竖起后腿 ，然后用前爪来攻击目标生物和玩家。",
        ],
        161: [
            "洞穴蜘蛛",
            "铁傀儡是一种大型的，强壮的，用来保护村民的效用性生物。",
        ],
        162: [
            "僵尸猪人",
            "僵尸猪人是生活在下界的一种中立型生物。僵尸猪人空闲时的移动速度相当的慢。它们可以被淹死，但免疫火和熔岩造成的伤害。",
        ],
        163: [
            "末影人",
            "末影人是一种来自于末路之地、会随机传送的黑色中立型生物。",
        ],
        164: [
            "蜘蛛",
            "蜘蛛是一种能够爬墙的普通中立型生物。在亮度等级较低时，蜘蛛与玩家敌对；否则它们不会攻击，除非玩家首先攻击它们。",
        ],
    },
    {
        15: ["甘蔗", "甘蔗是一种物品和重要的合成材料，能在水附近自然生成。"],
        28: ["胡萝卜", "胡萝卜为一种食物类物品，可以通过种植获得。"],
        79: [
            "小麦",
            "小麦是一种主要通过种植获得的物品，也可能在地牢箱子里自然生成。",
        ],
        84: ["红色蘑菇", "蘑菇是一种菌类，可以自然生长在昏暗的区域。"],
        87: [
            "南瓜",
            "南瓜是一种出现在草方块上的植物方块，可以被任何工具开采。",
        ],
        90: ["可可豆", "可可豆是一种染料和食物材料。"],
        100: [
            "甜菜根",
            "甜菜根是一种食物类植物，能够通过收成成熟的甜菜作物获得。",
        ],
        105: [
            "草丛",
            "草丛是一种植物。它的颜色取决于其所在的生物群系，通常与草方块的颜色相同。",
        ],
        106: [
            "地狱疣",
            "地狱疣是一种在下界生长的植物，能通过任何工具采集获得。",
        ],
        107: ["干草块", "干草块是一种方块，可以给马喂食，也可以用来存储小麦。"],
        108: ["花", "花是一种植物，能够在泥土和草方块上自然生成。"],
        109: [
            "马铃薯",
            "马铃薯是一种可种植的食物物品，被烹饪后可以成为烤马铃薯。",
        ],
        110: [
            "树苗",
            "树苗是一种会长成树的物品，可以被任何工具破坏而掉落自身。",
        ],
        111: ["睡莲", "睡莲是一种自然生成在沼泽生物群系的水上的可收集的方块。"],
        112: ["藤蔓", "藤蔓是一种自然生成在丛林里的植物，可以通过剪刀收集。"],
        113: [
            "西瓜",
            "西瓜可以自然生成于丛林生物群系，也可以通过种植西瓜种子获得。",
        ],
        114: ["仙人掌", "仙人掌是一种自然生成于沙漠与平顶山生物群系的植物。"],
    },
    {
        1: ["玻璃瓶", "玻璃瓶可以装取水，是酿造药水所需要用到的重要物品。"],
        5: [
            "鞍",
            "鞍是可装置在猪与马身上的物品，让玩家得以骑乘猪以及被驯服的马来进行移动。",
        ],
        6: [
            "船",
            "船是一种在水上使用的交通工具，在水中可以以较快速度移动。撞到障碍物时会损坏。不同的木材合成出的船只外观不同。",
        ],
        8: ["床", "床可以让玩家休息，直接跳至下一个清晨。"],
        10: ["地图", "地图可以用来查看已经探索过的区域地形。"],
        11: ["指南针", "指南针会指向你的世界出生点。"],
        14: ["纸", "纸可以由甘蔗合成，是一种重要的材料。"],
        16: [
            "钓鱼竿",
            "钓鱼竿是主要用来获取鱼的工具。钓鱼竿也能用来钩取生物和其它实体，之后钓鱼竿能被收竿，以较快的速度拖向玩家。",
        ],
        19: [
            "附魔台",
            "使用附魔台可以让玩家对工具、盔甲进行附魔，附魔需要消耗你的经验值和附魔材料。",
        ],
        22: ["书", "书可以用皮革和纸合成。"],
        24: ["告示牌", "告示牌可以用来显示玩家设置的文本。"],
        25: [
            "工作台",
            "工作台是游戏中最重要的方块之一，它可以完成超过物品栏中的3X3的方块合成。使用任何木材都可以合成一个工作台，你也可以在NPC村庄中找到它。",
        ],
        26: [
            "海绵",
            "海绵是一种能够将水吸掉的方块，并随后变成一个湿海绵。你可以在海底遗迹找寻海绵的踪迹。",
        ],
        27: ["胡萝卜钓竿", "胡萝卜钓竿可以用来控制披着鞍的猪。"],
        29: [
            "花盆",
            "花盆是一种允许在它里面放置植物的装饰性方块，花盆可用来保存不同的植物。",
        ],
        31: ["画", "画是游戏中的装饰品，你可以用其装点环境。"],
        32: ["剪刀", "剪刀是一种工具，可以用来获取羊毛，或采集植物等。"],
        33: [
            "矿车",
            "矿车是一种主要的运输工具。矿车可以在轨道上行驶，在两个地点间铺设轨道，你可以使用矿车进行转移。",
        ],
        34: [
            "盔甲架",
            "盔甲架可以摆放各种盔甲，也可以摆放生物头颅 和南瓜。摆有手臂盔甲的盔甲架可以把除了盔甲、生物头颅和南瓜外的物品像玩家一样拿在手上。",
        ],
        36: [
            "炼药锅",
            "炼药锅是可以储存水的容器。手持水桶向其点击时可以为炼药锅装满水备用。",
        ],
        37: ["漏斗", "漏斗能够将物品移入或移出某个容器。"],
        38: [
            "箱子",
            "箱子可以用来储存物品。箱子可以用任何木板进行合成，当两个箱子放置在一起时也会成为一个“大箱子”。",
        ],
        39: [
            "门",
            "门可以通过材料合成，作为屏障使用。不同的材料合成出的门外观有区别。",
        ],
        40: ["命名牌", "命名牌可以让你对生物进行命名。"],
        41: ["酿造台", "酿造台可以用于酿造不同功效的药水。"],
        44: ["书与笔", "使用书与笔，玩家可以留下自己编辑的文字。"],
        47: [
            "铁轨",
            "铁轨是用来提供矿车行进路线的道具。它们能在废弃矿井中被找到，或是使用木棍和铁锭制造。在方块上铺设一条铁轨，你就可以在其上使用矿车了。",
        ],
        48: ["铁砧", "铁砧可以通过修复和重命名物品，也可以对物品进行附魔。"],
        50: ["桶", "桶是一种便携容器，可以用来携带水、熔岩或牛奶。"],
        51: ["碗", "碗是游戏中盛装食物的容器。"],
        52: [
            "物品展示框",
            "物品展示框可以让玩家把一个物品或方块让在架子中展示。",
        ],
        53: [
            "钟",
            "钟通过显示太阳和月亮相对地平线的位置来显示当前游戏的时间。",
        ],
    },
    {
        115: [
            "锄",
            "锄能用来把泥土或草方块变成耕地，也可被用作武器，根据合成材料的不同可以分为木质、石质、铁质、金质、钻石质。",
        ],
        116: [
            "斧",
            "斧是用来更快采集木质物品的工具，根据合成材料可分为木质、石质、铁质、金质、钻石质。",
        ],
        117: [
            "镐",
            "镐常被用来挖掘所有矿石和很多其它种类的方块，根据合成材料可被分为木质、石质、铁质、金质、钻石质。",
        ],
        118: ["弓", "弓是一种远程武器。"],
        119: [
            "护腿",
            "护腿为玩家穿戴在下身的盔甲。分为皮革裤子、锁链护腿、铁护腿、钻石护腿以及金护腿五种。",
        ],
        120: [
            "剑",
            "剑是一种近战武器，主要用于伤害生物或玩家，分为木剑、石剑、铁剑、金剑、钻石剑五种。",
        ],
        121: ["箭", "箭作为弓和发射器的弹药。"],
        123: [
            "锹",
            "锹是一种能够使采集泥土和其它方块更加轻松的工具，根据合成材料不同分为木质、石质、铁质、金质、钻石质五种。",
        ],
        124: ["鞘翅", "鞘翅是一种能够实现玩家滑翔的物品。"],
        125: [
            "头盔",
            "头盔为玩家穿戴在头部的盔甲。一共有皮革帽子、锁链头盔、铁头盔、钻石头盔以及金头盔五种。",
        ],
        126: [
            "胸甲",
            "胸甲为玩家穿戴在上身的盔甲，一共分为皮革外套、锁链胸甲、铁胸甲、钻石胸甲以及金胸甲五种。",
        ],
        127: [
            "靴子",
            "靴子为玩家穿戴在脚部的盔甲，一共有皮革靴子、锁链靴子、铁靴子、钻石靴子以及金靴子五种。",
        ],
    },
    {
        4: [
            "煤炭",
            "煤炭是一种能被用作燃料的矿产，常见于近地表。开采的煤矿石需要用煤炭或木炭进行烧制。煤炭也是广泛的合成应用，可以用来制作火把、火焰弹，也可以制成煤炭块便于保存。",
        ],
        12: [
            "铁锭",
            "铁是一种用途广泛的合成材料。铁锭可以通过冶炼铁矿石获得，除铁制的盔甲外，铁还可以用来合成各类常用工具，包括铁镐、铁锄、剪刀等。",
        ],
        20: [
            "钻石",
            "钻石是游戏中最珍贵的矿产，在开采钻石矿石时破坏钻石矿石后会掉落钻石。钻石与铁、金一样，可以合成盔甲类与工具类物品，而且钻石类物品具有相当好的性能与强度。作为合成材料，钻石还可以用来制作附魔台、烟火之星与唱片机。钻石矿石分布在地下底层，数量极为稀少。",
        ],
        54: [
            "金锭",
            "金是一种稀有的金属，与铁相似也可以用来合成盔甲类物品与工具类物品。金锭可以由冶炼金矿石或是合成金粒获得。金矿石主要分布在地下的中下层。",
        ],
        57: [
            "下界石英",
            "下界石英是下界中独有的矿产，在开采下界石英矿石时，破坏下界石英矿石后会掉落下界石英。下界石英是一些特殊物品的合成材质，比如闪长岩、红石比较器、阳光传感器、花岗岩。下界石英在下界中的分布非常广泛。",
        ],
        70: [
            "红石",
            "红石是游戏中一种独特的资源，主要用于制造与酿造，同时红石自己也有一种特殊的用途 - 组成“红石电路”。在开采红石矿石时，红石矿石破坏就会掉落红石粉。",
        ],
        71: [
            "绿宝石",
            "绿宝石是游戏中最稀有的矿产之一，主要用途是与村民交易时作为货币使用。在开采绿宝石矿石时，当绿宝石矿石被破坏后会掉落绿宝石。绿宝石矿石分布在地下中下层的区域。",
        ],
        72: [
            "青金石",
            "青金石是一种常见的染料，青金石可以通过冶炼青金石矿石获得。与其他染料相同，青金石作为染料可以给羊毛、皮革盔甲、玻璃、硬化粘土染色，也可以给烟火之星制造特殊效果，或是为旗帜加入图案。",
        ],
        73: [
            "萤石",
            "萤石是出现在下界的发光方块。当采集萤石时会掉落萤石粉，用萤石粉再次进行合成就可以得到萤石方块了。",
        ],
        74: [
            "粘土",
            "粘土是一种合成材料，可以在水下找到。在破坏粘土块时会掉落粘土。粘土是一些常用的装饰性方块的合成材料，比如粘土块，此外粘土也可以用来烧制成红砖。",
        ],
    },
    {
        2: ["玻璃", "玻璃是一种可被染色的完全透明的装饰性方块。"],
        3: [
            "沙子",
            "沙子是一种在海滩和沙漠自然生成的方块。沙子的爆炸抗性很低。在沙漠、海滩附近可以找到沙子，沙子还有一种变种称为“红沙”。",
        ],
        21: [
            "黑曜石",
            "黑曜石是一种以极高的爆炸抗性以及用于制作下界传送门而出名的黑色方块。黑曜石是游戏中唯一一个需要用钻石稿才能采集的方块。当流动水与熔岩碰到一起时会形成黑曜石，在地下熔岩或水源附近会经常找到黑曜石。",
        ],
        42: [
            "圆石",
            "圆石是一种常见的方块，可以通过开采石头获得。它的材质类似于一个不均匀的、粗糙堆砌的面。圆石主要用于合成或作为建筑方块使用。",
        ],
        55: [
            "安山岩",
            "安山岩是一种石质材料，可被任何镐挖掘获得。安山岩可以用来做建筑装饰，具有防爆抗性。",
        ],
        56: ["闪长岩", "闪长岩是一种石质材料，通常会在地底以矿脉形式出现。"],
        58: [
            "冰",
            "冰是透明的固定方块，可以轻易摧毁。想在生存模式下获得完整的冰方块，你需要使用有“精准采集”附魔的稿。",
        ],
        59: [
            "海晶石",
            "海晶石是生成于海底遗迹的石质方块。任何种类的海晶石都会被作为海底遗迹的主要部分生成。在该结构中可以找到大量的的海晶石和海晶石砖。",
        ],
        60: [
            "花岗岩",
            "玻璃是一种可被花岗岩是一种石质材料，可用稿进行采集。普通花岗岩会生成在任何地下矿脉中。染色的完全透明的装饰性方块。",
        ],
        61: [
            "基岩",
            "基岩存在于地图最底部，是一种在生存模式里不可破坏的方块。在创造模式中，你可以在物品栏中找到基岩。",
        ],
        62: [
            "木头",
            "木头，也被称作原木，是可以在树上找到的自然生成的方块，主要用于合成木板。木头有6个变种：橡木、桦木、云杉木、丛林木、深色橡木和金合欢木。",
        ],
        63: [
            "泥土",
            "泥土是游戏中最常见的方块，可以用手或任何工具挖掘。泥土主要的作用是用来种植，把植物苗或甘蔗、蘑菇放在泥土上在合适条件下就会生长。在种植小麦、南瓜、西瓜等植物时，你需要先进行耕地。",
        ],
        64: [
            "沙石",
            "沙石是一种沙子系列的固体方块，与沙子不同沙石不会被重力影响。采集沙石需要用到稿。",
        ],
        65: [
            "砂砾",
            "砂砾是游戏中为数不多可以受到重力影响的方块。在采集砂砾时，有几率会掉落燧石。",
        ],
        66: [
            "石头",
            "石头是游戏中大量存在的方块之一，石头的开采需要用镐。石头也是多种道具的合成原料。",
        ],
        67: [
            "石砖",
            "石砖是主要的建筑材料之一，也存在多种变种。石砖可以用石头进行合成。",
        ],
        68: [
            "雪块",
            "用锹摧毁雪块时，会掉落雪球。再使用雪球进行合成，就可以再次得到完整的雪块了。雪块不会在高光照射下融化，也不会被水摧毁。雪块可以制作“雪傀儡”。",
        ],
    },
];
// 第二版_第五块-tj-nav切换
$(".tj-nav").on("click", "a", function () {
    $(this).addClass("active").siblings().removeClass("active");
    // 生成右边nav列表
    let subHtml = "";
    $.each(nameArr[$(this).index()], function (i, n) {
        subHtml += `<a href="javascript:;" data-id="${i}"><img src="./upload/tj/pic${i}.png"
        alt=""></a>`;
    });
    $(".subNav").html(subHtml).find("a").eq(0).click();
    // 如果是第二个a则显示二级菜单
    if ($(this).index() == 1) {
        $(".tj-wrap").addClass("tbShengwu");
        // 选中第一个
        $(".sideNav a").eq(0).click();
        $(".sideNav").show();
    } else {
        $(".tj-wrap").removeClass("tbShengwu");
        $(".sideNav").hide();
    }
    $(".subNav a").eq(0).click();
});

// 第二版_第五块-sideNav切换
$(".subNav").on("click", "a", function () {
    let id = $(this).attr("data-id");
    // 显示选择状态
    $(this).addClass("active").siblings().removeClass("active");
    // 更换图片
    $(".bigImg img").attr("src", `./upload/tj/big/pic${id}.png`);
    // 更换名字和简介
    $(".desc p").html(
        `<em>${nameArr[$(".tj-nav .active").index()][id][0]}</em>${
            nameArr[$(".tj-nav .active").index()][id][1]
        }`
    );
    // 如果有合成配方显示并更新合成配方，没有则隐藏
    if (closeArr[$(".tj-nav .active").index()][id] != undefined) {
        $(".peifang").show();

        $(".peifang-ge img").each(function (i, n) {
            $(this).attr(
                "src",
                `./upload/tj/pic/pic${
                    closeArr[$(".tj-nav .active").index()][id][i]
                }.png`
            );
        });
        $(".peifang-img img").attr("src", `./upload/tj/big/pic${id}.png`);
    } else {
        $(".peifang").hide();
    }
});

// sideNav切换
$(".sideNav").on("click", "a", function () {
    let indxeArr;
    $(this).addClass("active").siblings().removeClass("active");
    $(".subNav a").hide();
    indxeArr = [
        [128, 129],
        [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
        [
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
        ],
        [130, 134, 157],
        [158, 159],
        [157, 160, 161, , 162, 163, 164],
    ];
    // 生成右边nav列表
    let subHtml = "";
    indxeArr[$(".sideNav .active").index()].forEach(function (n, i) {
        console.log(i, n);
        subHtml += `<a href="javascript:;" data-id="${n}"><img src="./upload/tj/pic${n}.png"
        alt=""></a>`;
    });
    $(".subNav").html(subHtml).find("a").eq(0).click();
});
