create database egg_house;
show tables;
use egg_house;
select * from `comment`;
-- 用户表
create table `user` (
`id` int not null auto_increment,
`username` varchar(20) default null comment '用户名',
`password` varchar(64) default null comment '密码',
`avatar` LONGBLOB comment '头像',
`phone` varchar(20) default null comment '电话',
`sign` varchar(300) default null comment '用户签名',
`createTime` timestamp default CURRENT_TIMESTAMP comment '创建时间',
`updateTime` timestamp default CURRENT_TIMESTAMP comment '更新时间',
primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='用户表';

-- 查看当前数据库
-- show databases;

-- use egg_house;

-- 查看数据库表
-- show tables;

-- 查看表结构
-- desc user

-- 房屋表
create table `house`(
  `id` int not null auto_increment,
  `name` varchar(50) default null comment '房屋名称',
  `info` varchar(150) default null comment '房屋简介',
  `address` varchar(200) default null comment '房屋地址',
  `price` int default null comment '房屋价格',
  `publishTime` timestamp default CURRENT_TIMESTAMP comment '发布时间',
  `cityCode` varchar(10) not null comment '城市编码',
  `showCount` int not null default 0 comment '展示次数',
  `startTime` timestamp default  CURRENT_TIMESTAMP comment '开始出租时间',
  `endTime` timestamp default  CURRENT_TIMESTAMP comment '出租结束时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='房屋表';

-- 图片表
create table `imgs`(
  `id` int not null auto_increment,
  `url` varchar(500) default null comment '图片地址',
  `houseId` int not null comment '房屋id',
  `createTime` timestamp default CURRENT_TIMESTAMP comment '创建时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='图片表';

-- 评论表
create table `comment`(
  `id` int not null auto_increment,
  `userId` int not null comment '用户表',
  `houseId` int not null comment '房屋表',
  `msg` varchar(500) not null comment '内容',
  `createTime` timestamp default CURRENT_TIMESTAMP comment '创建时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='评论表';

INSERT INTO `house` VALUES 
(1,'东城民宿','东区 临近地铁','东城区',200,'2020-08-10 13:37:57','10001',1,'2020-08-10 13:37:57','2020-10-20 13:37:57'),
(2,'西城民宿','西区 临近地铁','西城区',100,'2020-08-10 13:38:23','10001',1,'2020-08-10 13:37:57','2020-11-10 13:37:57'),
(3,'新区民宿','新区民宿位置优越','新城区',150,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(4,'老城民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(5,'西苑民宿','西苑风景秀美','西城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-11-10 13:37:57'),
(6,'紫金巷民宿','紧邻老城区风景秀美','东城区',120,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-11-10 13:37:57'),
(7,'北戴河民宿','风景秀美适合放松身心','北城区',100,'2020-08-10 13:38:23','10002',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(8,'南苑民宿','南苑民宿风景秀美','东城区',150,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-10-10 13:37:57'),
(9,'北苑民宿','北苑民宿风景秀美','北城区',100,'2020-08-10 13:38:23','10002',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(10,'三厢和民宿','紧邻地铁交通方便','东城区',200,'2020-08-10 13:38:23','10003',0,'2020-08-10 13:37:57','2020-10-10 13:37:57'),
(11,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(12,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(13,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(14,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57'),
(15,'老城区民宿','老城区风景秀美','老城区',100,'2020-08-10 13:38:23','10001',0,'2020-08-10 13:37:57','2020-12-10 13:37:57');

INSERT INTO `imgs` VALUES
(1,'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',1,'2020-08-11 13:37:57'),
(2,'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',1,'2020-08-11 13:37:57'),
(3,'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',1,'2020-08-11 13:37:57'),
(4,'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',2,'2020-08-11 13:37:57'),
(5,'https://img3.mukewang.com/szimg/5f3cdd710925166812000676-360-202.png',2,'2020-08-11 13:37:57'),
(6,'https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png',3,'2020-08-11 13:37:57'),
(7,'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',4,'2020-08-11 13:37:57'),
(8,'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',5,'2020-08-11 13:37:57'),
(9,'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',6,'2020-08-11 13:37:57'),
(10,'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',7,'2020-08-11 13:37:57'),
(11,'https://img3.mukewang.com/szimg/5f3cdd710925166812000676-360-202.png',8,'2020-08-11 13:37:57'),
(12,'https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png',9,'2020-08-11 13:37:57'),
(13,'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',10,'2020-08-11 13:37:57'),
(14,'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',11,'2020-08-11 13:37:57'),
(15,'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',12,'2020-08-11 13:37:57'),
(16,'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',13,'2020-08-11 13:37:57'),
(17,'https://img3.mukewang.com/szimg/5f3cdd710925166812000676-360-202.png',14,'2020-08-11 13:37:57'),
(18,'https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png',15,'2020-08-11 13:37:57');




-- 订单表
 create table `order` (
  `id` int not null auto_increment,
  `order_number` varchar(20) default null comment '订单编号',
  `userId` int not null comment '用户id',
  `houseId` int not null comment '房屋id',
  `isPayed` int default 0 comment '是否支付，0未支付，1已支付',
  `createTime` timestamp default CURRENT_TIMESTAMP comment '创建时间',
  `updateTime` timestamp default CURRENT_TIMESTAMP comment '更新时间',
  primary key(id)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='订单表';


INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (1,4,1,'lisi frist msg!!!','2021-04-05 20:19:59');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (2,4,1,'lisi secodon msg !!!','2021-04-05 20:25:20');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (3,5,1,'zhangsan friste 1123','2021-04-05 20:26:04');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (4,4,15,'hi~','2021-04-06 11:46:52');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (5,5,1,'还不错','2021-04-06 20:28:15');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (6,5,4,'感觉不错','2021-04-06 20:28:45');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (7,5,4,'222','2021-04-06 20:29:01');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (8,4,15,'试试就试试','2021-04-07 10:23:48');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (9,4,15,'123','2021-04-07 10:24:02');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (10,4,15,'123','2021-04-07 10:24:56');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (11,4,15,'321','2021-04-07 10:25:00');
INSERT INTO `comment` (`id`,`userId`,`houseId`,`msg`,`createTime`) VALUES (12,13,4,'狗哥','2021-04-08 09:25:04');

INSERT INTO `order` (`id`,`order_number`,`userId`,`houseId`,`isPayed`,`createTime`,`updateTime`) VALUES (5,'1617693561862',4,15,1,'2021-04-06 11:47:23','2021-04-06 15:19:21');
INSERT INTO `order` (`id`,`order_number`,`userId`,`houseId`,`isPayed`,`createTime`,`updateTime`) VALUES (6,NULL,4,4,1,'2021-04-06 14:34:08','2021-04-06 15:17:04');
INSERT INTO `order` (`id`,`order_number`,`userId`,`houseId`,`isPayed`,`createTime`,`updateTime`) VALUES (7,NULL,4,1,0,'2021-04-06 15:19:46','2021-04-06 15:19:46');
INSERT INTO `order` (`id`,`order_number`,`userId`,`houseId`,`isPayed`,`createTime`,`updateTime`) VALUES (8,NULL,4,2,0,'2021-04-06 15:19:50','2021-04-06 15:19:50');
INSERT INTO `order` (`id`,`order_number`,`userId`,`houseId`,`isPayed`,`createTime`,`updateTime`) VALUES (9,'1617712217629',5,2,1,'2021-04-06 20:28:02','2021-04-06 20:30:17');
INSERT INTO `order` (`id`,`order_number`,`userId`,`houseId`,`isPayed`,`createTime`,`updateTime`) VALUES (14,NULL,5,4,0,'2021-04-06 20:29:23','2021-04-06 20:29:23');
INSERT INTO `order` (`id`,`order_number`,`userId`,`houseId`,`isPayed`,`createTime`,`updateTime`) VALUES (15,NULL,13,4,0,'2021-04-08 09:25:10','2021-04-08 09:25:10');


INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (1,'admin','cceb426126cf05587d59c507d6be08f1',NULL,NULL,NULL,'2021-03-31 10:16:15','2021-03-31 10:16:15');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (2,'cat','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-03-31 10:43:20','2021-03-31 10:43:20');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (3,'test','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-03-31 10:45:38','2021-03-31 10:45:38');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (4,'lisi','e0e6f2d88881c71f5a2ea77e40988e3c',NULL ,'15319175131','及时当勉励，岁月不待人','2021-03-31 10:46:56','2021-04-08 09:07:18');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (5,'zhangsan','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-01 08:40:30','2021-04-01 08:40:30');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (6,'wangwu','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-01 08:50:37','2021-04-01 08:50:37');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (7,'wangmazi','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-01 08:52:25','2021-04-01 08:52:25');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (8,'libai','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-01 09:21:03','2021-04-01 09:21:03');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (9,'taibai','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-01 09:22:16','2021-04-01 09:22:16');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (10,'sushi','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-01 09:23:16','2021-04-01 09:23:16');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (11,'wangduoyu','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-02 20:02:58','2021-04-02 20:02:58');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (12,'2gou','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,NULL,NULL,'2021-04-08 09:20:57','2021-04-08 09:20:57');
INSERT INTO `user` (`id`,`username`,`password`,`avatar`,`phone`,`sign`,`createTime`,`updateTime`) VALUES (13,'gou','e0e6f2d88881c71f5a2ea77e40988e3c',NULL,'15319175131','及时当勉励，岁月不待人','2021-04-08 09:21:58','2021-04-08 09:24:43');
