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
		default:
			break;
	}
}

// �յ�������Ϣ
function OnAnyChatTextMessage(dwFromUserId, dwToUserId, bSecret, lpMsgBuf, dwLen) {
	DisplayTextMessage(dwFromUserId, lpMsgBuf);
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
 
// �ͻ������ӷ�������bSuccess��ʾ�Ƿ����ӳɹ���errorcode��ʾ��������
function OnAnyChatConnect(bSuccess, errorcode) {
	AddLog("OnAnyChatConnect(errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
    if (errorcode == 0) {
		
    }
    else {
		DisplayLoadingDiv(false);
    }
}

// �ͻ��˵�¼ϵͳ��dwUserId��ʾ�Լ����û�ID�ţ�errorcode��ʾ��¼�����0 �ɹ�������Ϊ�������룬�ο��������붨��
function OnAnyChatLoginSystem(dwUserId, errorcode) {
	DisplayLoadingDiv(false);
	AddLog("OnAnyChatLoginSystem(userid=" + dwUserId + ", errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
    if (errorcode == 0) {
		ConfigAnyChatParameter();
		mSelfUserId = dwUserId;	
		ShowHallDiv(true);
		initialize();
    } else {
		ShowHallDiv(false);
    }
}

// �ͻ��˽��뷿�䣬dwRoomId��ʾ�����뷿���ID�ţ�errorcode��ʾ�Ƿ���뷿�䣺0�ɹ����룬����Ϊ��������
function OnAnyChatEnterRoom(dwRoomId, errorcode) {
    DisplayLoadingDiv(false);
    if (errorcode == 0) {
        // �򿪱�����Ƶ����Ƶ

	    BRAC_UserCameraControl(-1, 1);
	    BRAC_UserSpeakControl(-1, 1);
        showVideoSessionScreen(); // ������Ƶ��ʾλ��
    } else {

    }
	AddLog("OnAnyChatEnterRoom(roomid=" + dwRoomId + ", errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
}

// �յ���ǰ����������û���Ϣ�����뷿��󴥷�һ�Σ�dwUserCount��ʾ�����û����������Լ�����dwRoomId��ʾ����ID
function OnAnyChatRoomOnlineUser(dwUserCount, dwRoomId) {

		// ����Է���Ƶ����Ƶ
	BRAC_UserCameraControl(mTargetUserId, 1);
	BRAC_UserSpeakControl(mTargetUserId, 1);
		AddLog("OnAnyChatRoomOnlineUser(count=" + dwUserCount + ", roomid=" + dwRoomId + ")", LOG_TYPE_EVENT);
	
}

// �û����루�뿪�����䣬dwUserId��ʾ�û�ID�ţ�bEnterRoom��ʾ���û��ǽ��루1�����뿪��0������
function OnAnyChatUserAtRoom(dwUserId, bEnterRoom) {
	AddLog("OnAnyChatUserAtRoom(userid=" + dwUserId + ", benter=" + bEnterRoom + ")", LOG_TYPE_EVENT);
	if(dwUserId == mTargetUserId && bEnterRoom != 0) {
		// ����Է���Ƶ����Ƶ
		BRAC_UserCameraControl(mTargetUserId, 1);
		BRAC_UserSpeakControl(mTargetUserId, 1);
	}
}

// ���������ѹرգ�����Ϣֻ���ڿͻ������ӷ������ɹ�֮�������쳣�ж�֮ʱ������reason��ʾ���ӶϿ���ԭ��
function OnAnyChatLinkClose(reason, errorcode) {
	var message="OnAnyChatLinkClose(reason=" + reason + ", errorcode=" + errorcode + ")";
	AddLog(message, LOG_TYPE_EVENT);
	DisplayLoadingDiv(false);
	if(mTargetUserId!=0)
	{
		ForSession(message);
	}
	ShowHallDiv(false);
	ShowLoginDiv(true);
}

// �û�����Ƶ�豸״̬�仯��Ϣ��dwUserId��ʾ�û�ID�ţ�State��ʾ���û��Ƿ��Ѵ���Ƶ�ɼ��豸��0���رգ�1���򿪣�
function OnAnyChatMicStateChange(dwUserId, State) {

}

// �û�����ͷ״̬�����仯��dwUserId��ʾ�û�ID�ţ�State��ʾ����ͷ�ĵ�ǰ״̬��0��û������ͷ��1��������ͷ��û�д򿪣�2���򿪣�
function OnAnyChatCameraStateChange(dwUserId, State) {
    if (State == 0) GetID(dwUserId + "_CameraTag").src = "";
    if (State == 1) GetID(dwUserId + "_CameraTag").src = "./images/advanceset/camera_false.png";
    if (State == 2) GetID(dwUserId + "_CameraTag").src = "./images/advanceset/camera_true.png";
}

// �����û��������û���P2P��������״̬�����仯��dwUserId��ʾ�����û�ID�ţ�State��ʾ�����û��������û��ĵ�ǰP2P��������״̬��0��û�����ӣ�1����TCP���ӣ�2����UDP���ӣ�3��TCP��UDP���ӣ�
function OnAnyChatP2PConnectState(dwUserId, State) {

}

// �û�����˽������dwUserId��ʾ�����ߵ��û�ID�ţ�dwRequestId��ʾ˽�������ţ���ʶ������
function OnAnyChatPrivateRequest(dwUserId, dwRequestId) {

}

// �û��ظ�˽������dwUserId��ʾ�ظ��ߵ��û�ID�ţ�errorcodeΪ��������
function OnAnyChatPrivateEcho(dwUserId, errorcode) {

}

// �û��˳�˽�ģ�dwUserId��ʾ�˳��ߵ��û�ID�ţ�errorcodeΪ��������
function OnAnyChatPrivateExit(dwUserId, errorcode) {

}

// ��Ƶͨ����Ϣ֪ͨ�ص�����
function OnAnyChatVideoCallEvent(dwEventType, dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr) {
	switch(dwEventType)
	{
		case BRAC_VIDEOCALL_EVENT_REQUEST:
			onVideoCallControlRequest(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_REPLY:
		    onVideoCallControlReply(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_START:
			onVideoCallControlStart(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_FINISH:
		     onVideoCallControlFinish(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break; 
		
	}
	AddLog("OnAnyChatVideoCallEvent(dwEventType=" + dwEventType + ", dwUserId=" + dwUserId + ", dwErrorCode=" + dwErrorCode + ", dwFlags=" + dwFlags + ", dwParam=" + dwParam + ", szUserStr=" + szUserStr + ")", LOG_TYPE_EVENT);
	
}

// �û���Ϣ����֪ͨ��dwUserId��ʾ�û�ID�ţ�dwType��ʾ�������
function OnAnyChatUserInfoUpdate(dwUserId, dwType) {

	if(dwUserId==0&&dwType==0)
		CreateUserImage("whole");

}

// ��������״̬�仯��dwUserId��ʾ�����û�ID�ţ�dwStatus��ʾ�û��ĵ�ǰ�״̬��0 ���ߣ� 1 ����
function OnAnyChatFriendStatus(dwUserId, dwStatus) {

//	AddLog("OnAnyChatFriendStatus(dwUserId=" + dwUserId + ", dwStatus=" + dwStatus + ")", LOG_TYPE_EVENT);
	if (dwStatus == USER_OFFLINE_STATUS) {				// ����
		removeOfflineUser(dwUserId);
	}
}


//ҵ������¼�֪ͨ
function OnAnyChatObjectEvent(dwObjectType, dwObjectId, dwEventType, dwParam1, dwParam2, dwParam3, dwParam4, strParam) {
	//AddLog("OnAnyChatObjectEvent(dwObjectType=" + dwObjectType + ", dwObjectId=" + dwObjectId +  ", dwEventType=" + dwEventType + ")", LOG_TYPE_EVENT);
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
		default:
			break;
	}
}


//ҵ��������ݸ����¼�
function OnAnyChatObjectUpdate(dwObjectType, dwObjectId) {
	var str = null;
	AddLog('OnAnyChatObjectUpdate(' + dwObjectType + ',' + dwObjectId + ')', LOG_TYPE_EVENT);

}

//ҵ�����ͬ������¼�
function OnAnyChatObjectSyncDataFinish(dwObjectType, dwObjectId) {
	AddLog('OnAnyChatObjectSyncDataFinish(' + dwObjectType + ',' + dwObjectId + ')', LOG_TYPE_EVENT);


}

// �����������֪ͨ�¼�
function OnAnyChatEnterAreaResult(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog('OnAnyChatEnterAreaResult(' + dwObjectType + ',' + dwObjectId +','+dwErrorCode + ')', LOG_TYPE_EVENT);

}

// �뿪��������֪ͨ�¼�
function OnAnyChatLeaveAreaResult(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog('OnAnyChatLeaveAreaResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);
	mCurrentStatus = CLIENT_STATUS_AREA;
}

//Ӫҵ��״̬�仯
function OnAnyChatAreaStatusChange(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog('OnAnyChatAreaStatusChange(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);

}

// ����״̬�仯
function OnAnyChatQueueStatusChanged(dwObjectType, dwObjectId) {
	AddLog('OnAnyChatQueueStatusChanged(' + dwObjectType + ',' + dwObjectId + ')', LOG_TYPE_EVENT);

}

// �����û�������н��
function OnAnyChatEnterQueueResult(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog('OnAnyChatEnterQueueResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);



}

// �����û��뿪���н��
function OnAnyChatLeaveQueueResult(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog('OnAnyChatLeaveQueueResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);

}

// ��ϯ״̬�仯
function OnAnyChatAgentStatusChanged(dwObjectType, dwObjectId, dwParam1) {
	AddLog('OnAnyChatAgentStatusChanged(' + dwObjectType + ',' + dwObjectId + ',' + dwParam1 + ')', LOG_TYPE_EVENT);


}

// ��ϯ����ʼ
function OnAnyChatServiceStart(dwAgentId, clientId, dwQueueId) {
	AddLog('OnAnyChatServiceStart(' + dwAgentId + ',' + clientId + ',' + dwQueueId +')', LOG_TYPE_EVENT);

}

//������û�пͻ�����ϯ�˴�����ʽ
function OnAnyChatAgentWaitingUser(){
	AddLog('OnAnyChatAgentWaitingUser()', LOG_TYPE_EVENT);

}