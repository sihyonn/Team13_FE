import { useState } from "react";
import { PropTypes } from "prop-types";

import FORM_INFO from "@/constants/FORM_INFO.js";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";

import useUserSettingQuery from "@/hooks/api/user/useUserSettingQuery.js";
import useChangeUserSettingMutation from "@/hooks/api/user/useChangeUserSettingMutation.js";
import { UserSettingDto } from "@/api/dto/user.dto.js";
import ChangeProfileBox from "@/components/my-account/ChangeProfileBox.jsx";
import Form from "@/components/common/form/Form.jsx";
import Button from "@/components/common/button/Button.jsx";

/** 내 계정 회원 정보 변경 폼 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */

function UserSettingForm() {
  const [profileImageFile, setProfileImageFile] = useState(null);
  const { mutate } = useChangeUserSettingMutation();
  const { data } = useUserSettingQuery();

  const handleUserSettingSubmit = (data) => {
    const requestBody = new UserSettingDto({
      nickname: data.nickname,
      phoneNumber: data.phoneNumber,
      profileFile: profileImageFile,
      password: data.currentPassword,
      newPassword: data.changedPassword,
    });

    mutate(requestBody);
  };

  return (
    <>
      <ChangeProfileBox
        loadedUrl={data?.profileImageUrl}
        imageFile={profileImageFile}
        setImageFile={setProfileImageFile}
      />
      <Form
        onSubmit={handleUserSettingSubmit}
        inputInformations={FORM_INFO.MY_ACCOUNT}
        defaultValues={{
          nickname: data?.nickname,
          phoneNumber: data?.phoneNumber,
          currentPassword: "",
          changedPassword: "",
        }}
      >
        <Button
          styleType={BUTTON_TYPE.PRIMARY}
          type="submit"
          style={{ width: "100%", padding: "1rem", margin: "0.75rem 0 2rem 0" }}
        >
          저장하기
        </Button>
      </Form>
    </>
  );
}

UserSettingForm.propTypes = {
  data: PropTypes.object,
};

export default UserSettingForm;