// AnyChat for Web SDK
// ²»Òª¶Ô¸ÃÎÄ¼þ½øÐÐÈÎºÎÐÞ¸Ä£¬µ±Éý¼¶SDKÊ±£¬ÐÂ°æ±¾½«»áÖ±½Ó¸²¸Ç¾É°æ±¾

/********************************************
 *			ÒµÎñ¶ÔÏó³£Á¿¶¨Òå				*
 *******************************************/

 
 // ¶ÔÏóÀàÐÍ¶¨Òå
var ANYCHAT_OBJECT_TYPE_AREA		=	4;		// ·þÎñÇøÓò
var ANYCHAT_OBJECT_TYPE_QUEUE		=	5;		// ¶ÓÁÐ¶ÔÏó
var ANYCHAT_OBJECT_TYPE_AGENT		=	6;		// ¿Í·þ¶ÔÏó
var ANYCHAT_OBJECT_TYPE_CLIENTUSER	=	8;		// ¿Í»§¶ËÓÃ»§¶ÔÏó£¬ÓÃÓÚÓë·þÎñÆ÷½»»»Êý¾Ý
var ANYCHAT_OBJECT_TYPE_SKILL		=	9;		// ÒµÎñ¼¼ÄÜ¶ÔÏó
var ANYCHAT_OBJECT_TYPE_QUEUEGROUP	=	10;		// ¶ÓÁÐ·Ö×é¶ÔÏó

// Í¨ÓÃ±êÊ¶¶¨Òå
var ANYCHAT_OBJECT_FLAGS_CLIENT		=	0;		// ÆÕÍ¨¿Í»§
var ANYCHAT_OBJECT_FLAGS_AGENT		=	2;		// ×øÏ¯ÓÃ»§
var ANYCHAT_OBJECT_FLAGS_MANANGER	=	4;		// ¹ÜÀíÓÃ»§
var ANYCHAT_OBJECT_FLAGS_AUTOMODE	=	16;		// ×Ô¶¯·þÎñÄ£Ê½

var ANYCHAT_INVALID_OBJECT_ID		=	-1;		// ÎÞÐ§µÄ¶ÔÏóID

// ×øÏ¯·þÎñ×´Ì¬¶¨Òå
var ANYCHAT_AGENT_STATUS_CLOSEED	=	0;		// ¹Ø±Õ£¬²»¶ÔÍâÌá¹©·þÎñ
var ANYCHAT_AGENT_STATUS_WAITTING	=	1;		// µÈ´ýÖÐ£¬¿ÉËæÊ±½ÓÊÜÓÃ»§·þÎñ
var ANYCHAT_AGENT_STATUS_WORKING	=	2;		// ¹¤×÷ÖÐ£¬ÕýÔÚÎªÓÃ»§·þÎñ
var ANYCHAT_AGENT_STATUS_PAUSED		=	3;		// ÔÝÍ£·þÎñ
var ANYCHAT_AGENT_STATUS_OFFLINE	=	10;		// ÀëÏß



/**
 *	¶ÔÏóÊôÐÔ¶¨Òå
 */

// ¶ÔÏó¹«¹²ÐÅÏ¢ÀàÐÍ¶¨Òå
var ANYCHAT_OBJECT_INFO_FLAGS		=	7;		// ¶ÔÏóÊôÐÔ±êÖ¾
var ANYCHAT_OBJECT_INFO_NAME		=	8;		// ¶ÔÏóÃû³Æ
var ANYCHAT_OBJECT_INFO_PRIORITY	=	9;		// ¶ÔÏóÓÅÏÈ¼¶
var ANYCHAT_OBJECT_INFO_ATTRIBUTE	=	10;		// ¶ÔÏóÒµÎñÊôÐÔ
var ANYCHAT_OBJECT_INFO_DESCRIPTION	=	11;		// ¶ÔÏóÃèÊö
var ANYCHAT_OBJECT_INFO_INTTAG		=	12;		// ¶ÔÏó±êÇ©£¬ÕûÐÍ£¬ÉÏ²ãÓ¦ÓÃ×Ô¶¨Òå
var ANYCHAT_OBJECT_INFO_STRINGTAG	=	13;		// ¶ÔÏó±êÇ©£¬×Ö·û´®£¬ÉÏ²ãÓ¦ÓÃ×Ô¶¨Òå
var ANYCHAT_OBJECT_INFO_GUID		=	14;		// ¶ÔÏóGUID
var ANYCHAT_OBJECT_INFO_STATUSJSON	=	15;		// ¶ÔÏó×´Ì¬ÊôÐÔ¼¯ºÏ


// ·þÎñÇøÓòÐÅÏ¢ÀàÐÍ¶¨Òå
var ANYCHAT_AREA_INFO_AGENTCOUNT	=	401;	// ·þÎñÇøÓò¿Í·þÓÃ»§Êý
var ANYCHAT_AREA_INFO_GUESTCOUNT	=	402;	// ·þÎñÇøÓòÄÚ·Ã¿ÍµÄÓÃ»§Êý£¨Ã»ÓÐÅÅÈë¶ÓÁÐµÄÓÃ»§£©
var ANYCHAT_AREA_INFO_QUEUEUSERCOUNT=	403;	// ·þÎñÇøÓòÄÚÅÅ¶ÓµÄÓÃ»§Êý
var ANYCHAT_AREA_INFO_QUEUECOUNT	=	404;	// ·þÎñÇøÓòÄÚ¶ÓÁÐµÄÊýÁ¿
var ANYCHAT_AREA_INFO_AGENTIDLIST	=	405;	// ·þÎñÇøÓò¿Í·þIDÁÐ±í
var ANYCHAT_AREA_INFO_IDLEAGENTCOUNT=	406;	// ·þÎñÇøÓò¿ÕÏÐ×øÏ¯ÊýÁ¿
var ANYCHAT_AREA_INFO_STATUSJSON	=	407;	// ·þÎñÇøÓò×´Ì¬ÐÅÏ¢£¬·µ»ØJsonÊý¾Ý
var ANYCHAT_AREA_INFO_WAITINGCOUNT	=	408;	// ·þÎñÇøÓòÄÚµÈºò·þÎñÓÃ»§Êý£¨³öÁË¶ÓÁÐ£¬µ«Ã»ÓÐ×øÏ¯·þÎñµÄÓÃ»§£©

// ¶ÓÁÐ×´Ì¬ÐÅÏ¢ÀàÐÍ¶¨Òå
var ANYCHAT_QUEUE_INFO_MYSEQUENCENO	=	501;	// ×Ô¼ºÔÚ¸Ã¶ÓÁÐÖÐµÄÐòºÅ
var ANYCHAT_QUEUE_INFO_BEFOREUSERNUM=	502;	// ÅÅÔÚ×Ô¼ºÇ°	ÃæµÄÓÃ»§Êý
var ANYCHAT_QUEUE_INFO_MYENTERQUEUETIME=503;	// ½øÈë¶ÓÁÐµÄÊ±¼ä
var ANYCHAT_QUEUE_INFO_LENGTH		=	504;	// ¶ÓÁÐ³¤¶È£¨ÓÐ¶àÉÙÈËÔÚÅÅ¶Ó£©£¬ÕûÐÍ
var ANYCHAT_QUEUE_INFO_WAITTIMESECOND=	508;	// ×Ô¼ºÔÚ¶ÓÁÐÖÐµÄµÈ´ýÊ±¼ä£¨ÅÅ¶ÓÊ±³¤£©£¬µ¥Î»£ºÃë
var ANYCHAT_QUEUE_INFO_AGENTINFO	=	509;	// ·þÎñµ±Ç°¶ÓÁÐµÄ×øÏ¯ÐÅÏ¢£¬·µ»ØJsonÊý¾Ý

// ¿Í·þ×´Ì¬ÐÅÏ¢ÀàÐÍ¶¨Òå
var ANYCHAT_AGENT_INFO_SERVICESTATUS=	601;	// ·þÎñ×´Ì¬£¬ÕûÐÍ
var ANYCHAT_AGENT_INFO_SERVICEUSERID=	602;	// µ±Ç°·þÎñµÄÓÃ»§ID£¬ÕûÐÍ
var ANYCHAT_AGENT_INFO_SERVICEBEGINTIME=603;	// µ±Ç°·þÎñµÄ¿ªÊ¼Ê±¼ä£¬ÕûÐÍ
var ANYCHAT_AGENT_INFO_SERVICETOTALTIME=604;	// ÀÛ¼Æ·þÎñÊ±¼ä£¬ÕûÐÍ£¬µ¥Î»£ºÃë
var ANYCHAT_AGENT_INFO_SERVICETOTALNUM=	605;	// ÀÛ¼Æ·þÎñµÄÓÃ»§Êý£¬ÕûÐÍ
var ANYCHAT_AGENT_INFO_SERVICEUSERINFO=	606;	// µ±Ç°·þÎñÓÃ»§ÐÅÏ¢£¬×Ö·û´®
var ANYCHAT_AGENT_INFO_RELATEQUEUES	=	607;	// ¹ØÁª¶ÓÁÐList£¬×Ö·û´®




/**
 *	¶ÔÏó·½·¨¶¨Òå
 */

// ¶ÔÏó¹«¹²²ÎÊý¿ØÖÆ³£Á¿¶¨Òå
var ANYCHAT_OBJECT_CTRL_CREATE		=	2;		// ´´½¨Ò»¸ö¶ÔÏó
var ANYCHAT_OBJECT_CTRL_SYNCDATA	=	3;		// Í¬²½¶ÔÏóÊý¾Ý¸øÖ¸¶¨ÓÃ»§£¬dwObjectId=-1£¬±íÊ¾Í¬²½¸ÃÀàÐÍµÄËùÓÐ¶ÔÏó
var ANYCHAT_OBJECT_CTRL_DEBUGOUTPUT	=	4;		// ¶ÔÏóµ÷ÊÔÐÅÏ¢Êä³ö
var ANYCHAT_OBJECT_CTRL_DELETE		=	5;		// É¾³ý¶ÔÏó
var ANYCHAT_OBJECT_CTRL_MODIFY		=	6;		// ÐÞ¸Ä¶ÔÏóÐÅÏ¢

// ·þÎñÇøÓò¿ØÖÆ³£Á¿¶¨Òå
var ANYCHAT_AREA_CTRL_USERENTER		=	401;	// ½øÈë·þÎñÇøÓò
var ANYCHAT_AREA_CTRL_USERLEAVE		=	402;	// Àë¿ª·þÎñÇøÓò

// ¶ÓÁÐ²ÎÊý¿ØÖÆ³£Á¿¶¨Òå
var ANYCHAT_QUEUE_CTRL_USERENTER	=	501;	// ½øÈë¶ÓÁÐ
var ANYCHAT_QUEUE_CTRL_USERLEAVE	=	502;	// Àë¿ª¶ÓÁÐ

// ¿Í·þ²ÎÊý¿ØÖÆ³£Á¿¶¨Òå
var ANYCHAT_AGENT_CTRL_SERVICESTATUS=	601;	// ×øÏ¯·þÎñ×´Ì¬¿ØÖÆ£¨ÔÝÍ£·þÎñ¡¢¹¤×÷ÖÐ¡¢¹Ø±Õ£©
var ANYCHAT_AGENT_CTRL_SERVICEREQUEST=	602;	// ·þÎñÇëÇó
var ANYCHAT_AGENT_CTRL_FINISHSERVICE=	604;	// ½áÊø·þÎñ
var ANYCHAT_AGENT_CTRL_EVALUATION	=	605;	// ·þÎñÆÀ¼Û£¬wParamÎª¿Í·þuserid£¬lParamÎªÆÀ·Ö£¬lpStrValueÎªÁôÑÔ






/**
 *	¶ÔÏóÒì²½ÊÂ¼þ¶¨Òå
 */

// ¶ÔÏó¹«¹²ÊÂ¼þ³£Á¿¶¨Òå
var ANYCHAT_OBJECT_EVENT_UPDATE		=	1;		// ¶ÔÏóÊý¾Ý¸üÐÂ
var ANYCHAT_OBJECT_EVENT_SYNCDATAFINISH=2;		// ¶ÔÏóÊý¾ÝÍ¬²½½áÊø

// ·þÎñÇøÓòÊÂ¼þ³£Á¿¶¨Òå
var ANYCHAT_AREA_EVENT_STATUSCHANGE	=	401;	// ·þÎñÇøÓò×´Ì¬±ä»¯
var ANYCHAT_AREA_EVENT_ENTERRESULT	=	402;	// ½øÈë·þÎñÇøÓò½á¹û
var ANYCHAT_AREA_EVENT_USERENTER	=	403;	// ÓÃ»§½øÈë·þÎñÇøÓò
var ANYCHAT_AREA_EVENT_USERLEAVE	=	404;	// ÓÃ»§Àë¿ª·þÎñÇøÓò
var ANYCHAT_AREA_EVENT_LEAVERESULT	=	405;	// Àë¿ª·þÎñÇøÓò½á¹û


// ¶ÓÁÐÊÂ¼þ³£Á¿¶¨Òå
var ANYCHAT_QUEUE_EVENT_STATUSCHANGE=	501;	// ¶ÓÁÐ×´Ì¬±ä»¯
var ANYCHAT_QUEUE_EVENT_ENTERRESULT	=	502;	// ½øÈë¶ÓÁÐ½á¹û
var ANYCHAT_QUEUE_EVENT_USERENTER	=	503;	// ÓÃ»§½øÈë¶ÓÁÐ
var ANYCHAT_QUEUE_EVENT_USERLEAVE	=	504;	// ÓÃ»§Àë¿ª¶ÓÁÐ
var ANYCHAT_QUEUE_EVENT_LEAVERESULT	=	505;	// Àë¿ª¶ÓÁÐ½á¹û


// ×øÏ¯ÊÂ¼þ³£Á¿¶¨Òå
var ANYCHAT_AGENT_EVENT_STATUSCHANGE=	601;	// ×øÏ¯×´Ì¬±ä»¯
var ANYCHAT_AGENT_EVENT_SERVICENOTIFY=	602;	// ×øÏ¯·þÎñÍ¨Öª£¨ÄÄ¸öÓÃ»§µ½ÄÄ¸ö¿Í·þ°ìÀíÒµÎñ£©
var ANYCHAT_AGENT_EVENT_WAITINGUSER	=	603;	// ÔÝÊ±Ã»ÓÐ¿Í»§£¬ÇëµÈ´ý
var ANYCHAT_AGENT_EVENT_ISREADY		=	604;	// ×øÏ¯×¼±¸ºÃ£¬¿ÉÒÔ·¢Æðºô½Ð


