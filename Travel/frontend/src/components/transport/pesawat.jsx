import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navbar";
import axios from 'axios';
import Typewritter from 'typewriter-effect';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { UploadOutlined } from '@ant-design/icons';
import { 
  Button, 
  Form, 
  Input, 
  Modal, 
  InputNumber, 
  Select, 
  Upload, 
  TreeSelect 
} from 'antd';
import { Grid } from '@material-ui/core';
import { Box, Card, Typography } from "@mui/material";
import Plane from '../image/TravelPlane.jpg';
import { DatePicker } from 'antd'
import Page from "../page";
  
export const Pesawat = (props) => {

      const { RangePicker } = DatePicker;
      const [open, setOpen] = useState(false);
      const [nama, setNama] = useState([]);
      const [email, setEmail] = useState([]);
      const [alamat, setAlamat] = useState([]);
      const [nomorTelepon, setNomorTelepon] = useState([]);
      const [tanggalLahir, setTanggalLahir] = useState([]);
      const [tanggalBerangkat, setTanggalBerangkat] = useState([]);
      const [tanggalPulang, setTanggalPulang] = useState([]);
      const [tujuan, setTujuan] = useState([]);
      const [ktp, setKtp] = useState([]);
      const [valueTelp, setValueTelp] = useState([]);
      const [valueTujuan, setValueTujuan] = useState();

      const showOtherData = () => {
        setOpen(true);
      };
      const hideUserModal = () => {
        setOpen(false);
      };

      const handleSubmit = async() => {

        const detail = { 
          nama, 
          email, 
          alamat, 
          nomorTelepon, 
          tanggalLahir,
          tanggalBerangkat,
          tanggalPulang,
          tujuan,
          ktp
        };

       await axios.post(`http://localhost:5000/detail-booking`, detail)
        .then(res => {
           localStorage.setItem('detail-booking', JSON.stringify(res.data))
        })
        .catch(err => {
          console.log(err.message);
        })
      }

      const onFinish = (e) => {
        e.preventDefault();
        handleSubmit();
      }

      const { Option } = Select;

      const phoneInputStyle =  {
        border: '1px solid white',
        width: '200px'
      }

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
          form.submit()
        };

        const rangeConfig = {
          rules: [
            {
              type: 'array',
              required: true,
              message: 'Please select departure & return dates !',
            },
          ],
        };

        const [treeData, setTreeData] = useState([
          {
            id: '1',
            title: 'Sumatera Utara',
            value: '0-0',
            children: [
              {
                title: 'Medan',
                value: '0-0-1',
                isLeaf: true,
              },
              {
                title: 'Rantau Parapat',
                value: '0-0-2',
                isLeaf: true,
              },
              {
                title: 'Lubuk Pakam',
                value: '0-0-3',
                isLeaf: true,
              },
              {
                title: 'Sibolga',
                value: '0-0-4',
                isLeaf: true,
              },
              {
                title: 'Sipirok',
                value: '0-0-5',
                isLeaf: true,
              },
              {
                title: 'Padangsidempuan',
                value: '0-0-6',
                isLeaf: true,
              },
            ],
          },
          {
            id: '2',
            title: 'Jawa Barat',
            value: '0-1',
            children: [
              {
                title: 'Bandung',
                value: '0-0-7',
                isLeaf: true,
              },
              {
                title: 'Banjar',
                value: '0-0-8',
                isLeaf: true,
              },
              {
                title: 'Bekasi',
                value: '0-0-9',
                isLeaf: true,
              },
              {
                title: 'Bogor',
                value: '0-0-10',
                isLeaf: true,
              },
              {
                title: 'Cimahi',
                value: '0-0-11',
                isLeaf: true,
              },
              {
                title: 'Cirebon',
                value: '0-0-12',
                isLeaf: true,
              }
            ]
          },
          {
            id: '3',
            title: 'Jawa Tengah',
            value: '0-2',
            children: [
              {
                title: 'Magelang',
                value: '0-0-13',
                isLeaf: true,
              },
              {
                title: 'Pekalongan',
                value: '0-0-14',
                isLeaf: true,
              },
              {
                title: 'Bekasi',
                value: '0-0-15',
                isLeaf: true,
              },
              {
                title: 'Salatiga',
                value: '0-0-16',
                isLeaf: true,
              },
              {
                title: 'Semarang',
                value: '0-0-17',
                isLeaf: true,
              },
              {
                title: 'Surakarta',
                value: '0-0-18',
                isLeaf: true,
              }
            ]
          },
          {
            id: '4',
            title: 'Jawa Timur',
            value: '0-3',
            children: [
              {
                title: 'Bangkalan',
                value: '0-0-19',
                isLeaf: true,
              },
              {
                title: 'Banyuwangi',
                value: '0-0-20',
                isLeaf: true,
              },
              {
                title: 'Blitar',
                value: '0-0-21',
                isLeaf: true,
              },
              {
                title: 'Bojonegoro',
                value: '0-0-22',
                isLeaf: true,
              },
              {
                title: 'Jember',
                value: '0-0-23',
                isLeaf: true,
              },
              {
                title: 'Kediri',
                value: '0-0-24',
                isLeaf: true,
              }
            ]
          },
        ]);

        const onLoadData = ({ id }) => 
           new Promise ((resolve) => {
            setTimeout(() => {
              resolve(undefined);
            }, 500);
           })

        


        return (
          <Modal title="Detail Reservasi" style={{ marginLeft: 550, marginTop: 100 }} open={open} onOk={onOk} onCancel={onCancel}>
            <Form style={{ marginTop: 40 }} form={form} layout="vertical" >
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input type="email" style={{ width: 235 }} value={email} onChange={(e) => setEmail(e.target.value)}  />
                </Form.Item>
                </Grid>
                <Grid xs={2} style={{ marginLeft: 88 }}>
                <Form.Item
                  name="tujuan"
                  id="tujuan"
                  label="Tujuan"
                  rules={[{ required: true, message: 'Please input your objective!' }]}
                >
                   <TreeSelect
                    style={{ width: '150px' }}
                    treeDataSimpleMode
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                    loadData={onLoadData}
                    value={tujuan}
                    onChange={(e) => setTujuan(e.target.value)}
                    placeholder="Please select"
                  />
                </Form.Item>
                </Grid>
                <Grid xs={6}>
                <Form.Item 
                 name="range-picker" 
                 id="tanggalBerangkat"
                 label="Tanggal Berangkat & Pulang"
                 onChange={e => setTanggalBerangkat(e.target.value)}
                //  {...rangeConfig}
                 >
                  <RangePicker />
                </Form.Item>
                </Grid>
                <Grid xs={3} style={{ marginLeft: 90 }}>
                <Form.Item
                  name="ktp"
                  id="ktp"
                  label="Upload KTP"
                  rules={[{ required: true, message: 'Please input your KTP!' }]}
                  // valuePropName="fileList"
                  // getValueFromEvent={normFile}
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button value={ktp} onChange={e => setKtp(e.target.value)}  icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                </Grid>
              </Grid>
            </Form>
          </Modal>
        );
      };

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
                      <Typography textAlign={'center'} mt={'15px'} fontFamily={'Inter, sans-serif'}>RESERVASI PENERBANGAN</Typography>
                      <div style={{ textAlign: 'center', color: '#376abd', fontFamily: 'Inter, sans-serif', marginTop: '10px' }}>
                      <Typewritter
                        options={{
                          strings: ['Please make sure that you fill in your data correctly.'],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                      </div>
                      {/* <Form.Provider
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
                     > */}
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
                          onFinish={onFinish}
                          >
                          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={6}>
                              <Form.Item
                                label="Nama Penumpang"
                                name="username"
                                id="nama"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                              >
                                <Input style={{ width: 200 }} value={nama} onChange={e => setNama(e.target.value)} />
                              </Form.Item>
                            </Grid>
                            <Grid xs={6}>
                              <Form.Item
                                label="Tanggal Lahir"
                                name="date"
                                id="tanggalLahir"
                                rules={[{ required: true, message: 'Please input your date of birth!' }]}
                              >
                                <DatePicker style={{ width: 200 }} value={tanggalLahir} onChange={e => setTanggalLahir(e.target.value)} />
                              </Form.Item>
                            </Grid>
                            <Grid xs={6}>
                              <Form.Item
                                label="Alamat Penumpang"
                                name="alamat"
                                id="alamat"
                                rules={[{ required: true, message: 'Please input your address!' }]}
                              >
                                <Input type="text" style={{ width: 200 }} value={alamat} onChange={e => setAlamat(e.target.value)} />
                              </Form.Item>
                            </Grid>
                            <Grid xs={6}>
                            <Form.Item
                              name="phone"
                              label="Nomor Telepon"
                              id="nomorTelepon"
                              rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                              <PhoneInput
                                 international
                                 defaultCountry="ID"
                                 style={phoneInputStyle}
                                 value={nomorTelepon}
                                 onChange={e => setNomorTelepon(e.target.value)}
                                 placeholder="Masukkan nomor telpon"
                              />
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
                          {/* </Form.Provider> */}
                      </Card>
                  </Grid>
           </Box>
       </>
    )
}