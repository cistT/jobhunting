import React from "react";

type UseCheckRadioButton = (defaultChecked: string | number) => {
  checked: string | number;
  changeRadioValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * ラジオボタンのチェックを管理・更新するHooks
 *
 * @param  {string|number} defaultChecked 最初にチェックを入れる値
 * @returns チェックされた値,チェックを更新する値
 */
const useCheckRadioButton: UseCheckRadioButton = (defaultChecked) => {
  const [checked, setChecked] = React.useState(defaultChecked);
  const changeRadioValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return { checked, changeRadioValue };
};

export default useCheckRadioButton;
