// AnyChat for Web SDK

/********************************************
 *				�¼��ص�����				*
 *******************************************/
 
 // �첽��Ϣ֪ͨ���������ӷ���������¼ϵͳ�����뷿�����Ϣ
function OnAnyChatNotifyMessage(dwNotifyMsg, wParam, lParam) {
	switch(dwNotifyMsg) {
		case WM_GV_CONNECT:			OnAnyChatConnect(wParam, lParam);			break;
		case WM_GV_LOGINSYSTEM:		OnAnyChatLoginSystem(wParam, lParam);		break;
		case WM_GV_ENTERROOM:		OnAnyChatEnterRoom(wParam, lParam);			break;
		case WM_GV_ONLINEUSER:		OnAnyChatRoomOnlineUser(wParam, lParam);	break;
		case WM_GV_USERATROOM:		OnAnyChatUserAtRoom(wParam, lParam);		break;
		case WM_GV_LINKCLOSE:		OnAnyChatLinkClose(wParam, lParam);			break;
		case WM_GV_MICSTATECHANGE:	OnAnyChatMicStateChange(wParam, lParam);	break;
		case WM_GV_CAMERASTATE:		OnAnyChatCameraStateChange(wParam, lParam);	break;
		case WM_GV_P2PCONNECTSTATE:	OnAnyChatP2PConnectState(wParam, lParam);	break;
		case WM_GV_PRIVATEREQUEST:	OnAnyChatPrivateRequest(wParam, lParam);	break;
		case WM_GV_PRIVATEECHO:		OnAnyChatPrivateEcho(wParam, lParam);		break;
		case WM_GV_PRIVATEEXIT:		OnAnyChatPrivateExit(wParam, lParam);		break;
		case WM_GV_USERINFOUPDATE:	OnAnyChatUserInfoUpdate(wParam, lParam);	break;
		case WM_GV_FRIENDSTATUS:	OnAnyChatFriendStatus(wParam, lParam);		break;
		case WM_GV_VIDEOSIZECHG:	OnAnyChatVideoSizeChange(wParam, lParam);	break;
		default:
			break;
	}
}

// �յ�������Ϣ
function OnAnyChatTextMessage(dwFromUserId, dwToUserId, bSecret, lpMsgBuf, dwLen) {
	log('�յ�'+dwFromUserId+':�ı���Ϣ��'+lpMsgBuf)
}

// �յ�͸��ͨ����������
function OnAnyChatTransBuffer(dwUserId, lpBuf, dwLen) {

}

// �յ�͸��ͨ������չ����������
function OnAnyChatTransBufferEx(dwUserId, lpBuf, dwLen, wParam, lParam, dwTaskId) {

}

// �ļ��������֪ͨ
function OnAnyChatTransFile(dwUserId, lpFileName, lpTempFilePath, dwFileLength, wParam, lParam, dwTaskId) {

}

// ϵͳ�����ı�֪ͨ
function OnAnyChatVolumeChange(device, dwCurrentVolume) {

}

// �յ����������͵�SDK Filter����
function OnAnyChatSDKFilterData(lpBuf, dwLen) {

}

// �յ�¼�����������¼�
function OnAnyChatRecordSnapShot(dwUserId, lpFileName, dwParam, dwFlags) {
	
}

// �յ�¼�����������¼�����չ��
function OnAnyChatRecordSnapShotEx(dwUserId, lpFileName, dwElapse, dwFlags, dwParam, lpUserStr) {

}

// �յ�¼�����������¼�����չ2������errorcode��
function OnAnyChatRecordSnapShotEx2(dwUserId, dwErrorCode, lpFileName, dwElapse, dwFlags, dwParam, lpUserStr) {
	
}

// AnyChatCoreSDK�첽�¼�
function OnAnyChatCoreSDKEvent(dwEventType, lpEventJsonStr) {
	
}


/********************************************
 *		AnyChat SDK����ҵ������				*
 *******************************************/
 
// �ͻ������ӷ�������bSuccess��ʾ�Ƿ����ӳɹ���errorcode��ʾ�������
function OnAnyChatConnect(bSuccess, errorcode) {
	//console.log("OnAnyChatConnect(errorcode=" + errorcode + ")");
    if (errorcode == 0) {
		log('���ӳɹ� errorcode:'+errorcode);


    }
    else {
		log('����ʧ�� errorcode:'+errorcode);
    }
}

// �ͻ��˵�¼ϵͳ��dwUserId��ʾ�Լ����û�ID�ţ�errorcode��ʾ��¼�����0 �ɹ�������Ϊ������룬�ο�������붨��
function OnAnyChatLoginSystem(dwUserId, errorcode) {
	console.log("OnAnyChatLoginSystem(userid=" + dwUserId + ", errorcode=" + errorcode + ")");
    if (errorcode == 0) {
		log('��¼�ɹ���userid��'+dwUserId);
		//ͬ��
		InitClientObjectInfo(dwUserId, 1, 5)

	} else {
		log('��¼ʧ�ܣ�errorcode��'+errorcode);
    }
}

// �ͻ��˽��뷿�䣬dwRoomId��ʾ�����뷿���ID�ţ�errorcode��ʾ�Ƿ���뷿�䣺0�ɹ����룬����Ϊ�������
function OnAnyChatEnterRoom(dwRoomId, errorcode) {

	if(errorcode==0){
		log('���뷿��ɹ���dwRoomId��'+dwRoomId);
	}else{
		log('���뷿��ʧ�ܣ�errorcode��'+ errorcode);
	}

	/**
	 * ��ȡ�豸
	 */

}

// �յ���ǰ����������û���Ϣ�����뷿��󴥷�һ�Σ�dwUserCount��ʾ�����û����������Լ�����dwRoomId��ʾ����ID
function OnAnyChatRoomOnlineUser(dwUserCount, dwRoomId) {
	log('����������'+dwUserCount);
	var userList = BRAC_GetOnlineUser();
	is_open_other();
	log('���䶼��˭��'+userList);
}

// �û����루�뿪�����䣬dwUserId��ʾ�û�ID�ţ�bEnterRoom��ʾ���û��ǽ��루1�����뿪��0������
function OnAnyChatUserAtRoom(dwUserId, bEnterRoom) {
	log("OnAnyChatUserAtRoom(userid=" + dwUserId + ", benter=" + bEnterRoom + ")");
}

// ���������ѹرգ�����Ϣֻ���ڿͻ������ӷ������ɹ�֮�������쳣�ж�֮ʱ������reason��ʾ���ӶϿ���ԭ��
function OnAnyChatLinkClose(reason, errorcode) {
	log('anychat ����رգ�'+errorcode);


}

// �û�����Ƶ�豸״̬�仯��Ϣ��dwUserId��ʾ�û�ID�ţ�State��ʾ���û��Ƿ��Ѵ���Ƶ�ɼ��豸��0���رգ�1���򿪣�
function OnAnyChatMicStateChange(dwUserId, State) {

}

// �û�����ͷ״̬�����仯��dwUserId��ʾ�û�ID�ţ�State��ʾ����ͷ�ĵ�ǰ״̬��0��û������ͷ��1��������ͷ��û�д򿪣�2���򿪣�
function OnAnyChatCameraStateChange(dwUserId, State) {

}

// �����û��������û���P2P��������״̬�����仯��dwUserId��ʾ�����û�ID�ţ�State��ʾ�����û��������û��ĵ�ǰP2P��������״̬��0��û�����ӣ�1����TCP���ӣ�2����UDP���ӣ�3��TCP��UDP���ӣ�
function OnAnyChatP2PConnectState(dwUserId, State) {

}

// �û�����˽������dwUserId��ʾ�����ߵ��û�ID�ţ�dwRequestId��ʾ˽�������ţ���ʶ������
function OnAnyChatPrivateRequest(dwUserId, dwRequestId) {

}

// �û��ظ�˽������dwUserId��ʾ�ظ��ߵ��û�ID�ţ�errorcodeΪ�������
function OnAnyChatPrivateEcho(dwUserId, errorcode) {

}

// �û��˳�˽�ģ�dwUserId��ʾ�˳��ߵ��û�ID�ţ�errorcodeΪ�������
function OnAnyChatPrivateExit(dwUserId, errorcode) {

}

// ��Ƶͨ����Ϣ֪ͨ�ص�����
function OnAnyChatVideoCallEvent(dwEventType, dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr) {
	log("OnAnyChatVideoCallEvent(dwEventType=" + dwEventType + ", dwUserId=" + dwUserId + ", dwErrorCode=" + dwErrorCode + ", dwFlags=" + dwFlags + ", dwParam=" + dwParam + ", szUserStr=" + szUserStr + ")");
	switch(+dwEventType)
	{
		case BRAC_VIDEOCALL_EVENT_REQUEST:
			//�յ���Ƶ��������
			onVideoCallControlRequest(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_REPLY:
			////��Ƶ��������ظ�
			onVideoCallControlReply(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_START:
			//ͨ����ʼ
			onVideoCallControlStart(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_FINISH:
			//��Ƶͨ������
			onVideoCallControlFinish(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;

	}
}

// �û���Ϣ����֪ͨ��dwUserId��ʾ�û�ID�ţ�dwType��ʾ�������
function OnAnyChatUserInfoUpdate(dwUserId, dwType) {
	log()
}

// ��������״̬�仯��dwUserId��ʾ�����û�ID�ţ�dwStatus��ʾ�û��ĵ�ǰ�״̬��0 ���ߣ� 1 ����
function OnAnyChatFriendStatus(dwUserId, dwStatus) {
	log('����update��userid:'+dwUserId+'| status��'+dwStatus);
	//console.log("OnAnyChatFriendStatus(dwUserId=" + dwUserId + ", dwStatus=" + dwStatus + ")", LOG_TYPE_EVENT);
	
}

//ҵ������¼�֪ͨ
function OnAnyChatObjectEvent(dwObjectType, dwObjectId, dwEventType, dwParam1, dwParam2, dwParam3, dwParam4, strParam) {
	//log("OnAnyChatObjectEvent(dwObjectType=" + dwObjectType + ", dwObjectId=" + dwObjectId +  ", dwEventType=" + dwEventType + ")", LOG_TYPE_EVENT);
	//refreshAgentServiceInfo();
	switch(dwEventType) {
		case ANYCHAT_OBJECT_EVENT_UPDATE: OnAnyChatObjectUpdate(dwObjectType, dwObjectId); break;
		case ANYCHAT_OBJECT_EVENT_SYNCDATAFINISH: OnAnyChatObjectSyncDataFinish(dwObjectType, dwObjectId); break;
		case ANYCHAT_AREA_EVENT_ENTERRESULT:	OnAnyChatEnterAreaResult(dwObjectType, dwObjectId, dwParam1);	break;
		case ANYCHAT_AREA_EVENT_LEAVERESULT:    OnAnyChatLeaveAreaResult(dwObjectType, dwObjectId, dwParam1); break;
		case ANYCHAT_AREA_EVENT_STATUSCHANGE:   OnAnyChatAreaStatusChange(dwObjectType, dwObjectId, dwParam1); break;
		case ANYCHAT_QUEUE_EVENT_STATUSCHANGE:	OnAnyChatQueueStatusChanged(dwObjectType, dwObjectId);			break;
		case ANYCHAT_QUEUE_EVENT_ENTERRESULT:	OnAnyChatEnterQueueResult(dwObjectType, dwObjectId, dwParam1);	break;
		case ANYCHAT_QUEUE_EVENT_LEAVERESULT:	OnAnyChatLeaveQueueResult(dwObjectType, dwObjectId, dwParam1);	break;
		case ANYCHAT_AGENT_EVENT_STATUSCHANGE: OnAnyChatAgentStatusChanged(dwObjectType, dwObjectId, dwParam1); break;
		case ANYCHAT_AGENT_EVENT_SERVICENOTIFY: OnAnyChatServiceStart(dwParam1, dwParam2, dwParam3); break;
		case ANYCHAT_AGENT_EVENT_WAITINGUSER:   OnAnyChatAgentWaitingUser(); break;
		case ANYCHAT_AGENT_EVENT_ISREADY:  OnAnyChatAgentprepared(dwParam1, dwParam2, dwParam3);break;
		default:
			break;
	}
}


//ҵ��������ݸ����¼�
function OnAnyChatObjectUpdate(dwObjectType, dwObjectId) {
	log('OnAnyChatObjectUpdate(' + dwObjectType + ',' + dwObjectId + ')');
	if(dwObjectType == ANYCHAT_OBJECT_TYPE_AREA) {
		areaIdArray[areaArrayIdx] = dwObjectId;
		areaArrayIdx++;
	} else if(dwObjectType == ANYCHAT_OBJECT_TYPE_QUEUE) {



	} else if(dwObjectType == ANYCHAT_OBJECT_TYPE_AGENT) {

	}

}

//ҵ�����ͬ������¼�
function OnAnyChatObjectSyncDataFinish(dwObjectType, dwObjectId) {
	log('OnAnyChatObjectSyncDataFinish(' + dwObjectType + ',' + dwObjectId + ')');
	if (dwObjectType == ANYCHAT_OBJECT_TYPE_AREA) {
		showSerivceArea();
	}

}

// �����������֪ͨ�¼�
function OnAnyChatEnterAreaResult(dwObjectType, dwObjectId, dwErrorCode) {
	log('OnAnyChatEnterAreaResult(' + dwObjectType + ',' + dwObjectId +','+dwErrorCode + ')');
	if(dwErrorCode==0){
		areaEnter();
	}

}

// �뿪��������֪ͨ�¼�
function OnAnyChatLeaveAreaResult(dwObjectType, dwObjectId, dwErrorCode) {
	document.getElementById('queue').innerHTML = '';
	log('OnAnyChatLeaveAreaResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')');
}

//Ӫҵ��״̬�仯
function OnAnyChatAreaStatusChange(dwObjectType, dwObjectId, dwErrorCode) {
	log('OnAnyChatAreaStatusChange(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')');

}

// ����״̬�仯
function OnAnyChatQueueStatusChanged(dwObjectType, dwObjectId) {
	log('OnAnyChatQueueStatusChanged(' + dwObjectType + ',' + dwObjectId + ')');

}

// �����û�������н��
function OnAnyChatEnterQueueResult(dwObjectType, dwObjectId, dwErrorCode) {
	queuetime(0);
	log('OnAnyChatEnterQueueResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')');



}

// �����û��뿪���н��
function OnAnyChatLeaveQueueResult(dwObjectType, dwObjectId, dwErrorCode) {
	queuetime(1);
	log('OnAnyChatLeaveQueueResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')');

}

// ��ϯ״̬�仯
function OnAnyChatAgentStatusChanged(dwObjectType, dwObjectId, dwParam1) {
	log('OnAnyChatAgentStatusChanged(' + dwObjectType + ',' + dwObjectId + ',' + dwParam1 + ')');


}

// ��ϯ����ʼ
function OnAnyChatServiceStart(dwAgentId, clientId, dwQueueId) {
	log('OnAnyChatServiceStart(' + dwAgentId + ',' + clientId + ',' + dwQueueId +')');

}

//������û�пͻ�����ϯ�˴���ʽ
function OnAnyChatAgentWaitingUser(){
	log('OnAnyChatAgentWaitingUser()');

}

//�ͻ��յ���ϯ׼����
function OnAnyChatAgentprepared(dwAgentId, clientId, dwQueueId){
	log('��ʼ������ϯ:'+dwAgentId);
	callAgent(dwAgentId);
	log('OnAnyChatAgentprepared(' + dwAgentId + ',' + clientId + ',' + dwQueueId +')');
}




function onVideoCallControlReply(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr)
{
	switch(dwErrorCode)
	{
		case GV_ERR_SUCCESS:
			log('����-���ͳɹ�:'+dwUserId);
			break;
		case GV_ERR_SESSION_QUIT:
			log("����-Դ�û����������Ự");
			break;
		case GV_ERR_SESSION_OFFLINE:
			log("����-Ŀ���û�������");
			break;
		case GV_ERR_SESSION_BUSY:
			log("����-Ŀ���û�æ");
			break;
		case GV_ERR_SESSION_REFUSE:
			log("����-Ŀ���û��ܾ��Ự");
			break;
		case GV_ERR_SESSION_TIMEOUT:
			log("����-�Ự����ʱ");
			break;
		case GV_ERR_SESSION_DISCONNECT:
			log("����-�������");
			break;
		default:
			break;
	}
}
