﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CalenderProject.ServiceReference1 {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServiceReference1.AppointmentServiceSoap")]
    public interface AppointmentServiceSoap {
        
        // CODEGEN: Generating message contract since element name HelloWorldResult from namespace http://tempuri.org/ is not marked nillable
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/HelloWorld", ReplyAction="*")]
        CalenderProject.ServiceReference1.HelloWorldResponse HelloWorld(CalenderProject.ServiceReference1.HelloWorldRequest request);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/HelloWorld", ReplyAction="*")]
        System.Threading.Tasks.Task<CalenderProject.ServiceReference1.HelloWorldResponse> HelloWorldAsync(CalenderProject.ServiceReference1.HelloWorldRequest request);
        
        // CODEGEN: Generating message contract since element name input from namespace http://tempuri.org/ is not marked nillable
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/RepeatAfterMe", ReplyAction="*")]
        CalenderProject.ServiceReference1.RepeatAfterMeResponse RepeatAfterMe(CalenderProject.ServiceReference1.RepeatAfterMeRequest request);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/RepeatAfterMe", ReplyAction="*")]
        System.Threading.Tasks.Task<CalenderProject.ServiceReference1.RepeatAfterMeResponse> RepeatAfterMeAsync(CalenderProject.ServiceReference1.RepeatAfterMeRequest request);
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class HelloWorldRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="HelloWorld", Namespace="http://tempuri.org/", Order=0)]
        public CalenderProject.ServiceReference1.HelloWorldRequestBody Body;
        
        public HelloWorldRequest() {
        }
        
        public HelloWorldRequest(CalenderProject.ServiceReference1.HelloWorldRequestBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute()]
    public partial class HelloWorldRequestBody {
        
        public HelloWorldRequestBody() {
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class HelloWorldResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="HelloWorldResponse", Namespace="http://tempuri.org/", Order=0)]
        public CalenderProject.ServiceReference1.HelloWorldResponseBody Body;
        
        public HelloWorldResponse() {
        }
        
        public HelloWorldResponse(CalenderProject.ServiceReference1.HelloWorldResponseBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="http://tempuri.org/")]
    public partial class HelloWorldResponseBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public string HelloWorldResult;
        
        public HelloWorldResponseBody() {
        }
        
        public HelloWorldResponseBody(string HelloWorldResult) {
            this.HelloWorldResult = HelloWorldResult;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class RepeatAfterMeRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="RepeatAfterMe", Namespace="http://tempuri.org/", Order=0)]
        public CalenderProject.ServiceReference1.RepeatAfterMeRequestBody Body;
        
        public RepeatAfterMeRequest() {
        }
        
        public RepeatAfterMeRequest(CalenderProject.ServiceReference1.RepeatAfterMeRequestBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="http://tempuri.org/")]
    public partial class RepeatAfterMeRequestBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public string input;
        
        public RepeatAfterMeRequestBody() {
        }
        
        public RepeatAfterMeRequestBody(string input) {
            this.input = input;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class RepeatAfterMeResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="RepeatAfterMeResponse", Namespace="http://tempuri.org/", Order=0)]
        public CalenderProject.ServiceReference1.RepeatAfterMeResponseBody Body;
        
        public RepeatAfterMeResponse() {
        }
        
        public RepeatAfterMeResponse(CalenderProject.ServiceReference1.RepeatAfterMeResponseBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="http://tempuri.org/")]
    public partial class RepeatAfterMeResponseBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public string RepeatAfterMeResult;
        
        public RepeatAfterMeResponseBody() {
        }
        
        public RepeatAfterMeResponseBody(string RepeatAfterMeResult) {
            this.RepeatAfterMeResult = RepeatAfterMeResult;
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface AppointmentServiceSoapChannel : CalenderProject.ServiceReference1.AppointmentServiceSoap, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class AppointmentServiceSoapClient : System.ServiceModel.ClientBase<CalenderProject.ServiceReference1.AppointmentServiceSoap>, CalenderProject.ServiceReference1.AppointmentServiceSoap {
        
        public AppointmentServiceSoapClient() {
        }
        
        public AppointmentServiceSoapClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public AppointmentServiceSoapClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public AppointmentServiceSoapClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public AppointmentServiceSoapClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        CalenderProject.ServiceReference1.HelloWorldResponse CalenderProject.ServiceReference1.AppointmentServiceSoap.HelloWorld(CalenderProject.ServiceReference1.HelloWorldRequest request) {
            return base.Channel.HelloWorld(request);
        }
        
        public string HelloWorld() {
            CalenderProject.ServiceReference1.HelloWorldRequest inValue = new CalenderProject.ServiceReference1.HelloWorldRequest();
            inValue.Body = new CalenderProject.ServiceReference1.HelloWorldRequestBody();
            CalenderProject.ServiceReference1.HelloWorldResponse retVal = ((CalenderProject.ServiceReference1.AppointmentServiceSoap)(this)).HelloWorld(inValue);
            return retVal.Body.HelloWorldResult;
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<CalenderProject.ServiceReference1.HelloWorldResponse> CalenderProject.ServiceReference1.AppointmentServiceSoap.HelloWorldAsync(CalenderProject.ServiceReference1.HelloWorldRequest request) {
            return base.Channel.HelloWorldAsync(request);
        }
        
        public System.Threading.Tasks.Task<CalenderProject.ServiceReference1.HelloWorldResponse> HelloWorldAsync() {
            CalenderProject.ServiceReference1.HelloWorldRequest inValue = new CalenderProject.ServiceReference1.HelloWorldRequest();
            inValue.Body = new CalenderProject.ServiceReference1.HelloWorldRequestBody();
            return ((CalenderProject.ServiceReference1.AppointmentServiceSoap)(this)).HelloWorldAsync(inValue);
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        CalenderProject.ServiceReference1.RepeatAfterMeResponse CalenderProject.ServiceReference1.AppointmentServiceSoap.RepeatAfterMe(CalenderProject.ServiceReference1.RepeatAfterMeRequest request) {
            return base.Channel.RepeatAfterMe(request);
        }
        
        public string RepeatAfterMe(string input) {
            CalenderProject.ServiceReference1.RepeatAfterMeRequest inValue = new CalenderProject.ServiceReference1.RepeatAfterMeRequest();
            inValue.Body = new CalenderProject.ServiceReference1.RepeatAfterMeRequestBody();
            inValue.Body.input = input;
            CalenderProject.ServiceReference1.RepeatAfterMeResponse retVal = ((CalenderProject.ServiceReference1.AppointmentServiceSoap)(this)).RepeatAfterMe(inValue);
            return retVal.Body.RepeatAfterMeResult;
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<CalenderProject.ServiceReference1.RepeatAfterMeResponse> CalenderProject.ServiceReference1.AppointmentServiceSoap.RepeatAfterMeAsync(CalenderProject.ServiceReference1.RepeatAfterMeRequest request) {
            return base.Channel.RepeatAfterMeAsync(request);
        }
        
        public System.Threading.Tasks.Task<CalenderProject.ServiceReference1.RepeatAfterMeResponse> RepeatAfterMeAsync(string input) {
            CalenderProject.ServiceReference1.RepeatAfterMeRequest inValue = new CalenderProject.ServiceReference1.RepeatAfterMeRequest();
            inValue.Body = new CalenderProject.ServiceReference1.RepeatAfterMeRequestBody();
            inValue.Body.input = input;
            return ((CalenderProject.ServiceReference1.AppointmentServiceSoap)(this)).RepeatAfterMeAsync(inValue);
        }
    }
}
