/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 27/03/2019 10:26:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_login
-- ----------------------------
DROP TABLE IF EXISTS `sys_login`;
CREATE TABLE `sys_login`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `last_login_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '最后登录时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_login
-- ----------------------------
INSERT INTO `sys_login` VALUES (1, 1, '2018-08-03 15:15:05');
INSERT INTO `sys_login` VALUES (2, 1, '2018-08-03 15:37:20');
INSERT INTO `sys_login` VALUES (3, 1, '2018-08-03 15:40:14');
INSERT INTO `sys_login` VALUES (4, 1, '2018-08-03 15:41:50');
INSERT INTO `sys_login` VALUES (5, 1, '2018-08-03 15:43:45');
INSERT INTO `sys_login` VALUES (6, 1, '2018-08-03 18:22:09');
INSERT INTO `sys_login` VALUES (7, 1, '2019-03-25 22:02:04');
INSERT INTO `sys_login` VALUES (8, 1, '2019-03-25 22:02:04');
INSERT INTO `sys_login` VALUES (9, 1, '2019-03-26 08:32:54');
INSERT INTO `sys_login` VALUES (10, 1, '2019-03-26 08:51:45');
INSERT INTO `sys_login` VALUES (11, 1, '2019-03-26 09:39:32');
INSERT INTO `sys_login` VALUES (12, 1, '2019-03-26 09:50:36');
INSERT INTO `sys_login` VALUES (13, 2, '2019-03-26 09:53:57');
INSERT INTO `sys_login` VALUES (14, 1, '2019-03-26 10:24:49');
INSERT INTO `sys_login` VALUES (15, 1, '2019-03-26 10:41:43');
INSERT INTO `sys_login` VALUES (16, 1, '2019-03-26 10:48:11');
INSERT INTO `sys_login` VALUES (17, 1, '2019-03-26 10:55:04');
INSERT INTO `sys_login` VALUES (18, 1, '2019-03-26 10:57:22');
INSERT INTO `sys_login` VALUES (19, 1, '2019-03-26 11:15:02');
INSERT INTO `sys_login` VALUES (20, 1, '2019-03-26 11:30:07');
INSERT INTO `sys_login` VALUES (21, 4, '2019-03-26 12:06:23');
INSERT INTO `sys_login` VALUES (22, 1, '2019-03-26 12:16:23');
INSERT INTO `sys_login` VALUES (23, 1, '2019-03-26 12:17:13');
INSERT INTO `sys_login` VALUES (24, 4, '2019-03-26 12:17:42');
INSERT INTO `sys_login` VALUES (25, 1, '2019-03-26 12:18:05');
INSERT INTO `sys_login` VALUES (26, 4, '2019-03-26 12:19:07');
INSERT INTO `sys_login` VALUES (27, 1, '2019-03-26 12:19:36');
INSERT INTO `sys_login` VALUES (28, 4, '2019-03-26 12:19:56');
INSERT INTO `sys_login` VALUES (29, 1, '2019-03-26 13:14:30');
INSERT INTO `sys_login` VALUES (30, 1, '2019-03-26 14:46:34');
INSERT INTO `sys_login` VALUES (31, 4, '2019-03-26 14:48:46');
INSERT INTO `sys_login` VALUES (32, 1, '2019-03-26 14:52:23');
INSERT INTO `sys_login` VALUES (33, 4, '2019-03-26 14:54:39');
INSERT INTO `sys_login` VALUES (34, 1, '2019-03-26 14:55:50');
INSERT INTO `sys_login` VALUES (35, 4, '2019-03-26 15:03:53');
INSERT INTO `sys_login` VALUES (36, 1, '2019-03-26 15:14:41');
INSERT INTO `sys_login` VALUES (37, 5, '2019-03-26 15:16:51');
INSERT INTO `sys_login` VALUES (38, 5, '2019-03-26 15:24:16');
INSERT INTO `sys_login` VALUES (39, 5, '2019-03-26 15:39:22');
INSERT INTO `sys_login` VALUES (40, 1, '2019-03-26 16:06:08');
INSERT INTO `sys_login` VALUES (41, 1, '2019-03-26 16:11:24');
INSERT INTO `sys_login` VALUES (42, 4, '2019-03-26 16:13:05');
INSERT INTO `sys_login` VALUES (43, 1, '2019-03-26 16:13:31');
INSERT INTO `sys_login` VALUES (44, 1, '2019-03-26 17:45:35');

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` int(11) NOT NULL,
  `parent_id` int(11) NULL DEFAULT NULL,
  `menu_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_url` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '#',
  `menu_type` enum('2','1') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '2' COMMENT '1 -- 系统菜单，2 -- 业务菜单',
  `menu_icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '#',
  `sort_num` int(11) NULL DEFAULT 1,
  `user_id` int(11) NULL DEFAULT 1 COMMENT '创建这个菜单的用户id',
  `is_del` int(11) NULL DEFAULT 0 COMMENT '1-- 删除状态，0 -- 正常',
  `update_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `create_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, 0, '系统管理', '#', '1', 'fa fa-gears', 1, 1, 0, '2017-09-08 16:15:24', '2017-09-07 14:52:41');
INSERT INTO `sys_menu` VALUES (2, 1, '菜单管理', 'menu/list', '1', '#', 1, 1, 0, '2017-09-12 11:28:09', '2017-09-07 14:52:41');
INSERT INTO `sys_menu` VALUES (3, 1, '角色管理', 'role/list', '1', NULL, 2, 1, 0, '2017-09-07 17:58:52', '2017-09-07 14:52:41');
INSERT INTO `sys_menu` VALUES (4, 1, '用户管理', 'user/list', '1', '', 3, 1, 0, '2017-09-12 09:44:48', '2017-09-07 14:52:41');
INSERT INTO `sys_menu` VALUES (5, 0, '商户管理', '#', '2', 'fa fa-tasks', 2, 1, 1, '2019-03-26 17:24:47', '2017-09-07 14:52:41');
INSERT INTO `sys_menu` VALUES (6, 5, '商户列表', '/member/list', '2', '', 1, 1, 1, '2019-03-26 17:24:47', '2017-09-07 14:52:41');
INSERT INTO `sys_menu` VALUES (7, 1, '', '', '2', '', 1, 1, 1, '2019-03-26 10:42:33', '2019-03-26 10:42:23');
INSERT INTO `sys_menu` VALUES (8, 5, '测试', '213', '2', '123', 123, 1, 1, '2019-03-26 17:24:47', '2019-03-26 15:01:37');
INSERT INTO `sys_menu` VALUES (9, 0, '123', '123', '2', '132', 123, 1, 0, '2019-03-26 15:01:58', '2019-03-26 15:01:58');
INSERT INTO `sys_menu` VALUES (10, 9, '12311', '123', '2', '123', 123, 1, 0, '2019-03-26 15:02:11', '2019-03-26 15:02:11');
INSERT INTO `sys_menu` VALUES (11, 5, '测试', '测', '2', '2qqw', 1, 1, 1, '2019-03-26 17:24:47', '2019-03-26 16:20:44');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色名',
  `role_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `rights` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '最大权限的值',
  `add_qx` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  `del_qx` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  `edit_qx` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  `query_qx` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  `user_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '管理员', '管理员权限', '126', '1536', '126', '96', '126', '1', '2019-03-26 15:02:40');
INSERT INTO `sys_role` VALUES (2, 'tyro', '随便创建的随便创建的随便创建的随便创建的随便创建的随便创建的随便创建的随便创建的随便创建的随便创建的', '10', '2', '1', '4', '90', '1', '2019-03-26 16:12:39');
INSERT INTO `sys_role` VALUES (3, 'test', '是测试角色这个是测试角色这个是测试角色这个是测试角色这个是测试角色', '1600', '1536', '1536', '18', '126', '1', '2019-03-26 16:12:29');
INSERT INTO `sys_role` VALUES (5, '项目经理', '超级管理员', '1536', '288', '1536', '1536', '1536', '1', '2019-03-26 15:03:30');
INSERT INTO `sys_role` VALUES (7, '2111', '31', '126', '0', '0', '0', '0', '1', '2019-03-26 16:25:11');
INSERT INTO `sys_role` VALUES (8, 'eqwe', 'qwe', '0', '0', '0', '0', '0', '1', '2019-03-26 16:27:50');
INSERT INTO `sys_role` VALUES (9, 'qe', 'qweeqw', '0', '0', '0', '0', '0', '1', '2019-03-26 16:27:56');
INSERT INTO `sys_role` VALUES (10, 'qwe', 'qweeqw', '0', '0', '0', '0', '0', '1', '2019-03-26 16:28:01');
INSERT INTO `sys_role` VALUES (11, 'qweqe', 'qweeqw', '0', '0', '0', '0', '0', '1', '2019-03-26 16:28:09');
INSERT INTO `sys_role` VALUES (12, 'qweqeq', 'qewqw', '0', '0', '0', '0', '0', '1', '2019-03-26 16:28:18');
INSERT INTO `sys_role` VALUES (13, 'qwe', 'qweee', '0', '0', '0', '0', '0', '1', '2019-03-26 16:28:24');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `nick_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pic_path` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '/images/logo.png',
  `status` enum('unlock','lock') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'unlock',
  `sessionId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'admin', '管理员', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'http://www.lrshuai.top/upload/user/20170612/05976238.png', 'unlock', 'DDE9029752974C01AD1ED673221A75CF', '2017-08-18 13:57:32');
INSERT INTO `sys_user` VALUES (2, 'tyro', 'tyro', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '/upload/show/user/82197046.png', 'unlock', '7581FC035AF40A2B87EEB5BF31510992', '2017-09-12 14:03:39');
INSERT INTO `sys_user` VALUES (3, 'asdf', 'asdf', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '/upload/show/user/85610497.png', 'unlock', NULL, '2017-09-13 14:49:10');
INSERT INTO `sys_user` VALUES (4, '测试', '测试', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '/upload/show/user/15876342.png', 'unlock', 'DDE9029752974C01AD1ED673221A75CF', '2019-03-26 10:44:27');
INSERT INTO `sys_user` VALUES (5, 'liuy', 'liuy', '7e5908db005d32b4d54ca7ba65781698e9b5b391', '/images/logo.png', 'unlock', 'DDE9029752974C01AD1ED673221A75CF', '2019-03-26 15:16:37');

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `role_id` int(11) NULL DEFAULT NULL,
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES (1, 1, 1, '2017-08-18 14:45:43');
INSERT INTO `sys_user_role` VALUES (13, 3, 3, '2017-09-14 14:30:02');
INSERT INTO `sys_user_role` VALUES (14, 2, 2, '2019-03-26 09:53:47');
INSERT INTO `sys_user_role` VALUES (16, 5, 3, '2019-03-26 15:16:43');
INSERT INTO `sys_user_role` VALUES (17, 4, 2, '2019-03-26 16:12:52');
INSERT INTO `sys_user_role` VALUES (18, 4, 3, '2019-03-26 16:12:52');

SET FOREIGN_KEY_CHECKS = 1;
