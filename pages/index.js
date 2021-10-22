import Head from 'next/head';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';

import {
  Grid2Cols,
  Grid3Cols,
  StyledLabel,
  TextField,
  TextFieldWithIcon,
  Container,
  Button,
} from 'components/index';
import {
  SectionSplitter,
  TipBox,
  LogoBox,
  TipContent,
  SelectAmount,
  SelectTip,
  TipPercentBox,
  TipCustomTextBox,
  CheckAmount,
  AmountBox,
  AmountLabel,
  AmountPerPerson,
  Amount,
  ResetBtn,
} from 'lib/styles/splitter.style';
import { splitterValidationSchema } from 'lib/validators/splitter.validator';
import logo from 'public/logo.svg';

const Home = () => {
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  const billAmountRef = useRef(null);
  const noOfPeopleRef = useRef(null);
  const customTipPercentRef = useRef(null);

  const tipsPercentArray = [5, 10, 15, 20, 25];

  const initialValues = {
    billAmount: '',
    noOfPeople: '',
    customTipPercent: '',
  };

  const formik = useFormik({
    validateOnBlur: true,
    isValidating: true,
    initialValues: initialValues,
    validationSchema: splitterValidationSchema,
    onSubmit: () => {
      resetAmount();
      setSelectedTip(0);
      handleReset();
    },
  });

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleBlur,
    setFieldValue,
    handleReset,
    touched,
  } = formik;

  const handleCalculateAmountPerPerson = (e, fieldName) => {
    if (allowOnlyNumbers(e, fieldName)) {
      handleChange(e);
      calculateAmountPerPerson(selectedTip);
      if (!e.target.value) {
        resetAmount();
      }
    }
  };

  const calculateAmountPerPerson = tipPercent => {
    const billAmount = billAmountRef.current.value;
    const noOfPeople = noOfPeopleRef.current.value;
    if (billAmount && noOfPeople) {
      const amountPerPersonWithoutTip = billAmount / noOfPeople;
      if (tipPercent !== 0) {
        const totalTip = (billAmount * tipPercent) / 100;

        const tipPerPerson = totalTip / noOfPeople;
        setTipPerPerson(tipPerPerson);
        const amountPerPerson = +amountPerPersonWithoutTip + +tipPerPerson;
        setTotalPerPerson(amountPerPerson);
        return;
      }
      setTotalPerPerson(amountPerPersonWithoutTip);
      setTipPerPerson(0);
    }
  };

  const handleChangeBillAmount = e => {
    handleCalculateAmountPerPerson(e, 'billAmount');
  };

  const handleChangeNoOfPeople = e => {
    handleCalculateAmountPerPerson(e, 'noOfPeople');
  };

  const handleSelectTipPercent = e => {
    setSelectedTip(e);
    calculateAmountPerPerson(e);
    setFieldValue('customTipPercent', '');
  };

  const handleChangeCustomTipPercent = e => {
    if (allowOnlyNumbers(e, 'customTipPercent')) {
      let customTip = 0;
      if (e.target.value) {
        customTip = e.target.value;
      }
      setSelectedTip(customTip);
      calculateAmountPerPerson(customTip);
    }
  };

  const resetAmount = () => {
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  const allowOnlyNumbers = (e, fieldName) => {
    const re = /^\d*[.]?\d*$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setFieldValue(fieldName, e.target.value);
      return true;
    }
    return false;
  };
  return (
    <>
      <Head>
        <title>Splitter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <main>
          <SectionSplitter>
            <Container>
              <TipBox>
                <LogoBox>
                  <Image src={logo} layout="fill" />
                </LogoBox>
                <TipContent>
                  <form>
                    <Grid2Cols>
                      <SelectAmount>
                        <TextFieldWithIcon
                          type="text"
                          name="billAmount"
                          id="billAmount"
                          label="Bill *"
                          placeholder="0"
                          ref={billAmountRef}
                          value={values.billAmount}
                          touched={touched.billAmount}
                          error={errors.billAmount}
                          icon="/icon-dollar.svg"
                          isInvalid={
                            errors &&
                            errors?.billAmount &&
                            touched &&
                            touched.billAmount
                          }
                          onChange={handleChangeBillAmount}
                          onBlur={handleBlur}></TextFieldWithIcon>
                        <SelectTip>
                          <StyledLabel>Select Tip %</StyledLabel>
                          <Grid3Cols>
                            {tipsPercentArray.map(tipPercent => (
                              <TipPercentBox
                                onClick={() =>
                                  handleSelectTipPercent(tipPercent)
                                }
                                key={tipPercent}
                                isActive={tipPercent === selectedTip}>
                                {tipPercent}%
                              </TipPercentBox>
                            ))}
                            <TipCustomTextBox>
                              <TextField
                                type="text"
                                name="customTipPercent"
                                id="customTipPercent"
                                placeholder="Custom"
                                ref={customTipPercentRef}
                                isActive={values.customTipPercent?.length}
                                value={values.customTipPercent}
                                touched={touched.customTipPercent}
                                error={errors.customTipPercent}
                                isInvalid={
                                  errors &&
                                  errors?.customTipPercent &&
                                  touched &&
                                  touched.customTipPercent
                                }
                                onChange={e => handleChangeCustomTipPercent(e)}
                                onBlur={handleBlur}></TextField>
                            </TipCustomTextBox>
                          </Grid3Cols>
                        </SelectTip>
                        <TextFieldWithIcon
                          type="text"
                          name="noOfPeople"
                          id="noOfPeople"
                          label="No of People *"
                          placeholder="0"
                          ref={noOfPeopleRef}
                          value={values.noOfPeople}
                          icon="/icon-person.svg"
                          touched={touched.noOfPeople}
                          error={errors.noOfPeople}
                          isInvalid={
                            errors &&
                            errors?.noOfPeople &&
                            touched &&
                            touched.noOfPeople
                          }
                          onChange={handleChangeNoOfPeople}
                          onBlur={handleBlur}></TextFieldWithIcon>
                      </SelectAmount>
                      <CheckAmount>
                        <AmountBox>
                          <div>
                            <AmountLabel>Tip Amount</AmountLabel>
                            <AmountPerPerson>/ person</AmountPerPerson>
                          </div>
                          <Amount>$ {tipPerPerson.toFixed(2)}</Amount>
                        </AmountBox>
                        <AmountBox>
                          <div>
                            <AmountLabel>Total</AmountLabel>
                            <AmountPerPerson>/ person</AmountPerPerson>
                          </div>
                          <Amount>$ {totalPerPerson.toFixed(2)}</Amount>
                        </AmountBox>
                        <ResetBtn>
                          <Button onClick={handleSubmit} type="submit">RESET</Button>
                        </ResetBtn>
                      </CheckAmount>
                    </Grid2Cols>
                  </form>
                </TipContent>
              </TipBox>
            </Container>
          </SectionSplitter>
        </main>
      </>
    </>
  );
};

export default Home;
