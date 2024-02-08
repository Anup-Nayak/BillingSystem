import React, { useState } from 'react';
import './ContractMasterForm.css';

const ContractMasterForm = () => {
  const [formData, setFormData] = useState({
    contractNo: '',
    contractName: '',
    businessUnit: '',
    businessArea: '',
    customer: '',
    site: '',
    region: '',
    validFromDate: '',
    validToDate: '',
    customerPONo: '',
    sapControlNo: '',
    costCentre: '',
    profitCentre: '',
    glAccNo: '',
    offeringCode: '',
    remarks: '',
    baseFuelRate: '',
    mergeRecurringCharges: false,
    mergeAdditionalCharges: false,
    calcFuelImpactCharges: false,
    invoiceProcessWise: false,
    invoiceServiceWise: false,
    groupCABWise: false,
    totalRoundingOff: '',
    poDetailsUOM: '',
    poDetailsQuantity: '',
    poDetailsThreshold: '',
    poDetailsMailTo: '',
    advanceInvoiceAmtPercent: '',
    advanceInvoiceDay: '',
    autoInvoice: false,
    invoiceFrequency: '',
    invoiceStartDay: '',
    invoiceBillDay: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // logic dalna isme for the backend #vidhi  
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="contract-form-container">
      <h2>Contract Master Creation</h2>
      <form onSubmit={handleSubmit}>
        <div className="first">
          <div className="form-group">
            <label>Contract No.</label>
            <input type="text" name="contractNo" value={formData.contractNo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Contract Name</label>
            <input type="text" name="contractName" value={formData.contractName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Business Unit</label>
            <input type="text" name="businessUnit" value={formData.businessUnit} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Business Area</label>
            <input type="text" name="businessArea" value={formData.businessArea} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Customer</label>
            <input type="text" name="customer" value={formData.customer} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Site</label>
            <input type="text" name="site" value={formData.site} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Region</label>
            <input type="text" name="region" value={formData.region} onChange={handleChange} readOnly />
          </div>
          <div className="form-group">

          </div>
          <div className="form-group">
            <label>Valid From Date</label>
            <input type="date" name="validFromDate" value={formData.validFromDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Valid To Date</label>
            <input type="date" name="validToDate" value={formData.validToDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Customer PO No.</label>
            <input type="text" name="customerPONo" value={formData.customerPONo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>SAP Control No.</label>
            <input type="text" name="sapControlNo" value={formData.sapControlNo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Cost Centre</label>
            <input type="text" name="costCentre" value={formData.costCentre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Profit Centre</label>
            <input type="text" name="profitCentre" value={formData.profitCentre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>GL Acc No.</label>
            <input type="text" name="glAccNo" value={formData.glAccNo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Offering Code</label>
            <input type="text" name="offeringCode" value={formData.offeringCode} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Remarks</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
        </div>
        <div className='first'>
          <div className="form-group">
            <label>Active</label>
            <input type="text" name="baseFuelRate" value={formData.ative} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Base Fuel Rate</label>
            <input type="text" name="baseFuelRate" value={formData.baseFuelRate} onChange={handleChange} />
          </div>

        </div>
        <div className='second'>

          <div className="checkBox">
            <label>Merge Recurring Charges</label>
            <input type="checkbox" name="mergeRecurringCharges" checked={formData.mergeRecurringCharges} onChange={handleChange} />
          </div>
          <div className="checkBox">
            <label>Merge Additional Charges</label>
            <input type="checkbox" name="mergeAdditionalCharges" checked={formData.mergeAdditionalCharges} onChange={handleChange} />
          </div>
          <div className="checkBox">
            <label>Calc. Fuel Impact Charges</label>
            <input type="checkbox" name="calcFuelImpactCharges" checked={formData.calcFuelImpactCharges} onChange={handleChange} />
          </div>
          <div className="checkBox">
            <label>Invoice Process Wise</label>
            <input type="checkbox" name="invoiceProcessWise" checked={formData.invoiceProcessWise} onChange={handleChange} />
          </div>
          <div className="checkBox">
            <label>Invoice Service Wise</label>
            <input type="checkbox" name="invoiceServiceWise" checked={formData.invoiceServiceWise} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Group CAB Wise (Bucket)</label>
            <input type="checkbox" name="groupCABWise" checked={formData.groupCABWise} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Total Rounding Off</label>
          <select name="totalRoundingOff" value={formData.totalRoundingOff} onChange={handleChange}>
            <option value="">Select rounding off option</option>
            <option value="Do Not Round Off">Do Not Round Off</option>
            <option value="Round Off To 0 Decimal">Round Off To 0 Decimal</option>
            <option value="Decrease to Previous Rupees">Decrease to Previous Rupees</option>
            <option value="Increase To Next Rupee">Increase To Next Rupee</option>
          </select>
        </div>
        <div className='second'>
          <div className="form-group">
            <label>PO Details UOM</label>
            <input type="text" name="poDetailsUOM" value={formData.poDetailsUOM} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>PO Details Quantity</label>
            <input type="text" name="poDetailsQuantity" value={formData.poDetailsQuantity} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>PO Details Threshold</label>
            <input type="text" name="poDetailsThreshold" value={formData.poDetailsThreshold} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>PO Details Mail To</label>
            <input type="text" name="poDetailsMailTo" value={formData.poDetailsMailTo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Advance Invoice Amount Percentage</label>
            <input type="text" name="advanceInvoiceAmtPercent" value={formData.advanceInvoiceAmtPercent} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Advance Invoice Day</label>
            <input type="text" name="advanceInvoiceDay" value={formData.advanceInvoiceDay} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Auto Invoice</label>
            <input type="checkbox" name="autoInvoice" checked={formData.autoInvoice} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Invoice Frequency</label>
            <input type="text" name="invoiceFrequency" value={formData.invoiceFrequency} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Invoice Start Day</label>
            <input type="text" name="invoiceStartDay" value={formData.invoiceStartDay} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Invoice Bill Day (+)</label>
            <input type="text" name="invoiceBillDay" value={formData.invoiceBillDay} onChange={handleChange} required />
          </div>
          {/* Client's Basic Details */}
          <div className="form-group">
            <label>Client Name</label>
            <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Client ID/Client Facility Code</label>
            <input type="text" name="clientId" value={formData.clientId} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Branch Start Date</label>
            <input type="text" name="branchStartDate" value={formData.branchStartDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Branch End Date</label>
            <input type="text" name="branchEndDate" value={formData.branchEndDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input type="text" name="status" value={formData.status} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Modal Type</label>
            <input type="text" name="modalType" value={formData.modalType} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Latitude_Longitude</label>
            <input type="text" name="Latitude_Longitude" value={formData.Latitude_Longitude} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Site_Name</label>
            <input type="text" name="Site_Name" value={formData.Site_Name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>GST_Number</label>
            <input type="text" name="GST_Number" value={formData.GST_Number} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>From Km</label>
            <input type="text" name="fromKm" value={formData.fromKm} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>To Km</label>
            <input type="text" name="toKm" value={formData.toKm} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Min. Billing Flag</label>
            <input type="checkbox" name="minBillingFlag" checked={formData.minBillingFlag} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Min. Billing UOM</label>
            <select name="minBillingUOM" value={formData.minBillingUOM} onChange={handleChange}>
              <option value="">Select UOM</option>
              <option value="Unit">Unit</option>
              <option value="AMT">AMT</option>
            </select>
          </div>
          <div className="form-group">
            <label>Min. Billing Qty</label>
            <input type="text" name="minBillingQty" value={formData.minBillingQty} onChange={handleChange} disabled={!formData.minBillingFlag} />
          </div>
          <div className="form-group">
            <label>Rate Per Unit</label>
            <input type="text" name="ratePerUnit" value={formData.ratePerUnit} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" name="employeeID" value={formData.employeeID} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Pickup Location</label>
            <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Drop Location</label>
            <input type="text" name="dropLocation" value={formData.dropLocation} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Employee Shift Code</label>
            <input type="text" name="employeeShiftCode" value={formData.employeeShiftCode} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Employee Shift Name</label>
            <input type="text" name="employeeShiftName" value={formData.employeeShiftName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Shift Time</label>
            <input type="text" name="shiftTime" value={formData.shiftTime} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Shift Buffer Time</label>
            <input type="text" name="shiftBufferTime" value={formData.shiftBufferTime} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Home Address Latitude</label>
            <input type="text" name="homeAddressLatitude" value={formData.homeAddressLatitude} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Home Address Longitude</label>
            <input type="text" name="homeAddressLongitude" value={formData.homeAddressLongitude} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContractMasterForm;