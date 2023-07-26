import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navbar";
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, InputNumber, Select, Upload } from 'antd';
import { Grid } from '@material-ui/core';
import { Box, Card, Typography } from "@mui/material";
import Plane from '../image/plane.jpg';
import { DatePicker } from 'antd'
import Page from "../page";
  
export const Pesawat = (props) => {

      const { RangePicker } = DatePicker;
      const [open, setOpen] = useState(false);
      const showOtherData = () => {
        setOpen(true);
      };
      const hideUserModal = () => {
        setOpen(false);
      };

      const { Option } = Select;

      const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };

      const useResetFormOnCloseModal = ({ form, open }) => {
        const prevOpenRef = useRef();
        useEffect(() => {
          prevOpenRef.current = open;
        }, [open]);
        const prevOpen = prevOpenRef.current;
        useEffect(() => {
          if (!open && prevOpen) {
            form.resetFields();
          }
        }, [form, prevOpen, open]);
      };
      const ModalForm = ({ open, onCancel }) => {
        const [form] = Form.useForm();
        useResetFormOnCloseModal({
          form,
          open,
        });
        const onOk = () => {
          form.submit();
        };

        const rangeConfig = {
          rules: [
            {
              type: 'array',
              message: 'Please select time!',
            },
          ],
        };

        return (
          <Modal title="Detail Reservasi" style={{ marginLeft: 550, marginTop: 100 }} open={open} onOk={onOk} onCancel={onCancel}>
            <Form style={{ marginTop: 40 }} form={form} layout="vertical" name="userForm">
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6}>
                <Form.Item
                  name="email"
                  label="Email"
                >
                  <Input type="email" style={{ width: 200 }} />
                </Form.Item>
                </Grid>
                <Grid xs={2} style={{ marginLeft: 88 }}>
                <Form.Item
                  name="age"
                  label="Umur"
                >
                  <InputNumber />
                </Form.Item>
                </Grid>
                <Grid xs={6}>
                <Form.Item name="range-picker" label="Tanggal Berangkat & Pulang" {...rangeConfig}>
                  <RangePicker />
                </Form.Item>
                </Grid>
                <Grid xs={3} style={{ marginLeft: 90 }}>
                <Form.Item
                  name="upload"
                  label="Upload KTP"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                </Grid>
              </Grid>
            </Form>
          </Modal>
        );
      };


      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="62">+62</Option>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );

    return (
        <>
        <Navbar />
         <Box height={30} />
           <Box sx={{ display: 'flex' }}>
               <Page />
                <Grid xs={12}>
                 <Grid style={{ marginTop: 120, marginLeft: '-100px', marginBottom: '30px'}}>
                  <img src={Plane} alt="" 
                    style={{ 
                      width: '100%',
                      height: '400px',
                      borderTopLeftRadius: '0', // Set the top-left corner radius to 0
                      borderTopRightRadius: '0', // Set the top-right corner radius to 0
                      borderBottomLeftRadius: '40%', // Set the bottom-left corner radius (you can adjust the value as needed)
                      borderBottomRightRadius: '30%',
                    }} />
                 </Grid>
                    <Card sx={{ width: '100%', marginLeft: '-30px', boxShadow: '1px 1px 10px 1px gray' }}>
                      <Typography textAlign={'center'} mt={'15px'}>Reservasi Penerbangan</Typography>
                      <Form.Provider
                        onFormFinish={(name, { values, forms }) => {
                          if (name === 'userForm') {
                            const { basicForm } = forms;
                            const users = basicForm.getFieldValue('users') || [];
                            basicForm.setFieldsValue({
                              users: [...users, values],
                            });
                            setOpen(false);
                          }
                        }}
                     >
                        <Form
                          name="wrap"
                          labelCol={{
                            flex: '200px',
                          }}
                          labelAlign="left"
                          labelWrap
                          wrapperCol={{
                            flex: 1,
                          }}
                          colon={false}
                          style={{
                            marginLeft: 295,
                            marginTop: 30,
                            maxWidth: 600,
                          }}
                          >
                          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={6}>
                              <Form.Item
                                label="Nama Penumpang"
                                name="username"
                              >
                                <Input style={{ width: 200 }}/>
                              </Form.Item>
                            </Grid>
                            <Grid xs={6}>
                              <Form.Item
                                label="Tanggal Lahir"
                                name="date"
                              >
                                <DatePicker style={{ width: 200 }}/>
                              </Form.Item>
                            </Grid>
                            <Grid xs={6}>
                              <Form.Item
                                label="Alamat Penumpang"
                                name="alamat"
                              >
                                <Input type="text" style={{ width: 200 }}/>
                              </Form.Item>
                            </Grid>
                            <Grid xs={6}>
                            <Form.Item
                              name="phone"
                              label="Phone Number"
                              rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                              <Input addonBefore={prefixSelector} style={{ width: '200px' }} />
                            </Form.Item>
                            </Grid>
                              <Form.Item label=" ">
                                <Button type="primary" onClick={showOtherData}>
                                  + {" "}Tambah Data
                                </Button>
                              </Form.Item>
                            </Grid>
                          </Form>
                          <ModalForm open={open} onCancel={hideUserModal} />
                          </Form.Provider>
                      </Card>
                  </Grid>
                {/* <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                    <Card id="CardPromo" sx={{ width: 1250, height: '400px', marginLeft: '-40px', display: 'flex', borderRadius: '20px' }}>
                       <img src={LogoPromoPesawat} alt="" style={{ width: '600px', height: '300px', marginLeft: '20px', marginTop: '25px', borderRadius: '20px'  }} />
                       <img src={LogoPromoPesawat2} alt="" style={{ width: '560px', height: '300px', marginLeft: '50px', marginTop: '25px', borderRadius: '20px'  }} />
                    </Card>
                    <Card id="formKeberangkatan">
                        <form>
                            <Grid container spacing={5} style={{ marginLeft: '80px', marginTop: '30px' }}>
                               <Grid xs={12} sm={5} item>
                                  <TextField
                                    id="standard-select-currency"
                                    select
                                    style={{ width: '200px' }}
                                    InputProps={{
                                      endAdornment: (
                                        <LiaPlaneDepartureSolid className='logoPesawat' />
                                      ),
                                    }}
                                    label="Dari"
                                    defaultValue="EUR"
                                    variant="standard"
                                    >
                                  </TextField>
                               </Grid>
                               <Grid xs={1} style={{ marginLeft: '-50px', marginTop: '35px' }}>
                                 <HiPaperAirplane />
                               </Grid>
                               <Grid xs={12} sm={6} item>
                               <TextField
                                    id="standard-select-currency"
                                    select
                                    style={{ width: '200px' }}
                                    InputProps={{
                                      endAdornment: (
                                        <LiaPlaneArrivalSolid className='logoPesawat' />
                                      ),
                                    }}
                                    label="Menuju"
                                    defaultValue="EUR"
                                    variant="standard"
                                    >
                                  </TextField>
                               </Grid>
                               <Grid xs={12} sm={5} item>
                                 <Space direction="vertical">
                                  <DatePicker placeholder="Jadwal Berangkat" style={{ height: '50px', width: '200px' }}/>
                                 </Space>
                               </Grid>
                               <Grid xs={1} style={{ marginLeft: '-50px', marginTop: '35px' }}>
                                 <HiPaperAirplane />
                               </Grid>
                               <Grid xs={12} sm={6} item>
                                  <Space direction="vertical">
                                    <DatePicker placeholder="Jadwal Pulang" style={{ height: '50px', width: '200px' }} />
                                  </Space>
                                </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                          id="outlined-number"
                                          InputProps={{
                                          endAdornment: (
                                            <BsFillPeopleFill style={{ marginLeft: '-195px' }} />
                                            )
                                           }}
                                          style={{ marginLeft: '4px', width: '200px' }}
                                          label="Jumlah Penumpang"
                                          type="number"
                                          InputLabelProps={{
                                            shrink: true,
                                          }}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            InputProps={{
                                              endAdornment: (
                                                <MdAirlineSeatReclineExtra className="logoClass" />
                                              )
                                            }}
                                            style={{ width: '200px', marginLeft: '-46px'}}
                                            label="Class"
                                            defaultValue="EUR"
                                            variant="standard"
                                            >
                                        </TextField>
                                     </Grid>
                                     <Grid xs={12} sm={6} style={{ marginLeft: '356px', marginTop: '15px'}}>
                                       <Button id="button-form-pesawat">Check</Button>
                                    </Grid>
                            </Grid>
                        </form>
                    </Card>
                </div> */}
           </Box>
       </>
    )
}