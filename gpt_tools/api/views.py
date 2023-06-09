from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PainEscaleSerializer, CreateCCSerializer
from .models import PainEscale
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class PainEscaleView(generics.ListCreateAPIView):
    queryset = PainEscale.objects.all()
    serializer_class = PainEscaleSerializer

class CreateCCView(APIView):
    serializer_class = CreateCCSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            whoareyou = serializer.data.get('whoareyou')
            product = serializer.data.get('product')
            descript = serializer.data.get('descript')
            trouble = serializer.data.get('trouble')
            target = serializer.data.get('target')
            channel = serializer.data.get('channel')
            feedback = serializer.data.get('feedback')
            session = self.request.session.session_key

            queryset = PainEscale.objects.filter(session=session)

            if queryset.exists():
                painescale = queryset[0]
                painescale.whoareyou = whoareyou
                painescale.product = product
                painescale.descript = descript
                painescale.trouble = trouble
                painescale.target = target
                painescale.channel = channel
                painescale.feedback = feedback
                painescale.save(update_fields=['whoareyou', 
                                               'product', 
                                               'descript', 
                                               'trouble', 
                                               'target', 
                                               'channel', 
                                               'feedback'])
            else:
                painescale = PainEscale(session=session, 
                                        whoareyou=whoareyou,
                                        product=product,
                                        descript=descript,
                                        trouble=trouble,
                                        target=target,
                                        channel=channel,
                                        feedback=feedback)
                painescale.save()
            
            return Response(PainEscaleSerializer(painescale).data,status=status.HTTP_201_CREATED)
